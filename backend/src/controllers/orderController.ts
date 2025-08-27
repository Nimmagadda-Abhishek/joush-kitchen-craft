import { Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { getDb } from '../config/firebase';
import { AuthedRequest } from '../middlewares/auth';
import { Order } from '../models/Order';

const db = getDb();

async function getUserCart(uid: string) {
  const doc = await db.collection('carts').doc(uid).get();
  if (!doc.exists) return { items: [] };
  return doc.data() as { items: any[] };
}

async function setUserCart(uid: string, cart: { items: any[] }) {
  await db.collection('carts').doc(uid).set(cart, { merge: true });
}

export async function checkout(req: AuthedRequest, res: Response) {
  const uid = req.user!.uid;
  const { paymentIntentId, address } = req.body || {};
  if (!paymentIntentId) return res.status(400).json({ error: 'paymentIntentId is required' });
  try {
    const piRef = db.collection('paymentIntents').doc(paymentIntentId);
    const piSnap = await piRef.get();
    if (!piSnap.exists) return res.status(404).json({ error: 'Payment intent not found' });
    const pi = piSnap.data() as any;
    if (pi.status !== 'succeeded') return res.status(400).json({ error: 'Payment not confirmed' });

    const cart = await getUserCart(uid);
    const order: Order = {
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
    await setUserCart(uid, { items: [] });
    res.status(201).json(order);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Checkout failed' });
  }
}