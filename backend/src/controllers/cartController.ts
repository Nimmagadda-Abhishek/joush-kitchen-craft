import { Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { getDb } from '../config/firebase';
import { AuthedRequest } from '../middlewares/auth';
import { Cart } from '../models/Cart';

const db = getDb();

async function getUserCart(uid: string): Promise<Cart> {
  const doc = await db.collection('carts').doc(uid).get();
  if (!doc.exists) return { items: [] };
  return doc.data() as Cart;
}

async function setUserCart(uid: string, cart: Cart) {
  await db.collection('carts').doc(uid).set(cart, { merge: true });
}

export async function getMyCart(req: AuthedRequest, res: Response) {
  const uid = req.user!.uid;
  try {
    const cart = await getUserCart(uid);
    res.json(cart);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to fetch cart' });
  }
}

export async function addItem(req: AuthedRequest, res: Response) {
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
}

export async function removeItem(req: AuthedRequest, res: Response) {
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
}