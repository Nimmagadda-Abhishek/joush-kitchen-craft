import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import admin from 'firebase-admin';

// Initialize Firebase Admin SDK (supports Vercel env FIREBASE_SERVICE_ACCOUNT or default credentials)
function initFirebase() {
  if (!admin.apps.length) {
    const svc = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (svc) {
      try {
        const parsed = JSON.parse(svc);
        admin.initializeApp({
          credential: admin.credential.cert(parsed),
          // databaseURL optional; use if provided
          databaseURL: process.env.FIREBASE_DB_URL,
        });
      } catch (e) {
        console.warn('[firebase] Failed to parse FIREBASE_SERVICE_ACCOUNT, falling back to default credentials');
        admin.initializeApp();
      }
    } else {
      admin.initializeApp();
    }
  }
  return admin;
}

initFirebase();
const db = admin.firestore();

// Augment Request with user
interface AuthedRequest extends Request {
  user?: admin.auth.DecodedIdToken;
}

// Optional middleware to verify Firebase ID token
function authOptional(req: AuthedRequest, _res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : undefined;
  if (!token) return next();
  admin
    .auth()
    .verifyIdToken(token)
    .then((decoded) => {
      req.user = decoded;
      next();
    })
    .catch(() => next());
}

// Required auth
function authRequired(req: AuthedRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : undefined;
  if (!token) return res.status(401).json({ error: 'Missing Authorization Bearer token' });
  admin
    .auth()
    .verifyIdToken(token)
    .then((decoded) => {
      req.user = decoded;
      next();
    })
    .catch(() => res.status(401).json({ error: 'Invalid token' }));
}

// Simple product fallback (useful before seeding Firestore)
const SAMPLE_PRODUCTS = [
  {
    id: 'p1',
    slug: 'authentic-snacks',
    title: 'Authentic Snacks',
    price: 599,
    currency: 'INR',
    image: '/images/authentic-snacks.jpg',
  },
  {
    id: 'p2',
    slug: 'south-indian-snacks',
    title: 'South Indian Snacks',
    price: 499,
    currency: 'INR',
    image: '/images/south-indian-snacks.jpg',
  },
];

// Helpers
async function getProducts() {
  const snapshot = await db.collection('products').get();
  if (snapshot.empty) return SAMPLE_PRODUCTS;
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

async function getProductBySlug(slug: string) {
  const ref = db.collection('products').where('slug', '==', slug).limit(1);
  const snap = await ref.get();
  if (snap.empty) return SAMPLE_PRODUCTS.find((p) => p.slug === slug) || null;
  const doc = snap.docs[0];
  return { id: doc.id, ...doc.data() } as any;
}

async function getUserCart(uid: string) {
  const doc = await db.collection('carts').doc(uid).get();
  if (!doc.exists) return { items: [] as any[] };
  return doc.data() as { items: any[] };
}

async function setUserCart(uid: string, cart: { items: any[] }) {
  await db.collection('carts').doc(uid).set(cart, { merge: true });
}

// Express app
export function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json({ limit: '1mb' }));
  app.use(authOptional);

  // Health
  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, service: 'joush-backend', timestamp: Date.now() });
  });

  // Products
  app.get('/api/products', async (_req, res) => {
    try {
      const products = await getProducts();
      res.json(products);
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to fetch products' });
    }
  });

  app.get('/api/products/:slug', async (req, res) => {
    try {
      const product = await getProductBySlug(req.params.slug);
      if (!product) return res.status(404).json({ error: 'Product not found' });
      res.json(product);
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to fetch product' });
    }
  });

  // Cart (requires auth)
  app.get('/api/cart/me', authRequired, async (req: AuthedRequest, res) => {
    const uid = req.user!.uid;
    try {
      const cart = await getUserCart(uid);
      res.json(cart);
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to fetch cart' });
    }
  });

  app.post('/api/cart/me/items', authRequired, async (req: AuthedRequest, res) => {
    const uid = req.user!.uid;
    const { productId, variantId, quantity = 1 } = req.body || {};
    if (!productId) return res.status(400).json({ error: 'productId is required' });

    try {
      const cart = await getUserCart(uid);
      const id = uuidv4();
      const newItem = { id, productId, variantId, quantity };
      cart.items = [...(cart.items || []), newItem];
      await setUserCart(uid, cart);
      res.status(201).json(cart);
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to add to cart' });
    }
  });

  app.delete('/api/cart/me/items/:id', authRequired, async (req: AuthedRequest, res) => {
    const uid = req.user!.uid;
    const itemId = req.params.id;
    try {
      const cart = await getUserCart(uid);
      cart.items = (cart.items || []).filter((it) => it.id !== itemId);
      await setUserCart(uid, cart);
      res.json(cart);
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to remove item' });
    }
  });

  // Mock payments
  // Create a mock payment intent
  app.post('/api/payments/create-intent', async (req, res) => {
    const { amount, currency = 'INR', metadata } = req.body || {};
    if (!amount || amount <= 0) return res.status(400).json({ error: 'amount must be > 0' });
    try {
      const id = `pi_mock_${uuidv4()}`;
      const clientSecret = `secret_${uuidv4()}`;
      const doc = {
        id,
        amount,
        currency,
        clientSecret,
        status: 'requires_confirmation',
        metadata: metadata || {},
        createdAt: Date.now(),
      };
      await db.collection('paymentIntents').doc(id).set(doc);
      res.status(201).json({ id, client_secret: clientSecret, status: doc.status });
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to create intent' });
    }
  });

  // Confirm a mock payment intent
  app.post('/api/payments/confirm', async (req, res) => {
    const { paymentIntentId } = req.body || {};
    if (!paymentIntentId) return res.status(400).json({ error: 'paymentIntentId is required' });
    try {
      const ref = db.collection('paymentIntents').doc(paymentIntentId);
      const snap = await ref.get();
      if (!snap.exists) return res.status(404).json({ error: 'PaymentIntent not found' });
      await ref.set({ status: 'succeeded', confirmedAt: Date.now() }, { merge: true });
      res.json({ id: paymentIntentId, status: 'succeeded' });
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to confirm payment' });
    }
  });

  // Checkout -> create order, clear cart
  app.post('/api/checkout', authRequired, async (req: AuthedRequest, res) => {
    const uid = req.user!.uid;
    const { paymentIntentId, address } = req.body || {};
    if (!paymentIntentId) return res.status(400).json({ error: 'paymentIntentId is required' });
    try {
      // verify payment success
      const piRef = db.collection('paymentIntents').doc(paymentIntentId);
      const piSnap = await piRef.get();
      if (!piSnap.exists) return res.status(404).json({ error: 'Payment intent not found' });
      const pi = piSnap.data() as any;
      if (pi.status !== 'succeeded') return res.status(400).json({ error: 'Payment not confirmed' });

      // get cart
      const cart = await getUserCart(uid);
      const order = {
        id: `ord_${uuidv4()}`,
        uid,
        items: cart.items || [],
        amount: pi.amount,
        currency: pi.currency,
        paymentIntentId,
        address: address || null,
        status: 'paid',
        createdAt: Date.now(),
      };
      await db.collection('orders').doc(order.id).set(order);

      // clear cart
      await setUserCart(uid, { items: [] });
      res.status(201).json(order);
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Checkout failed' });
    }
  });

  // Dev-only: seed sample products (guarded by NODE_ENV)
  app.post('/api/dev/seed-products', async (_req, res) => {
    if (process.env.NODE_ENV === 'production') return res.status(403).json({ error: 'Not allowed in production' });
    try {
      const batch = db.batch();
      SAMPLE_PRODUCTS.forEach((p) => {
        const ref = db.collection('products').doc(p.id);
        batch.set(ref, p);
      });
      await batch.commit();
      res.json({ ok: true, count: SAMPLE_PRODUCTS.length });
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Seed failed' });
    }
  });

  return app;
}