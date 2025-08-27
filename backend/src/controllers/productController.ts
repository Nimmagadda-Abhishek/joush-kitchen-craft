import { Request, Response } from 'express';
import { getDb } from '../config/firebase';
import { Product, SAMPLE_PRODUCTS } from '../models/Product';

const db = getDb();

export async function listProducts(_req: Request, res: Response) {
  try {
    const snapshot = await db.collection('products').get();
    if (snapshot.empty) return res.json(SAMPLE_PRODUCTS);
    const products = snapshot.docs.map((d) => ({ id: d.id, ...(d.data() as Product) }));
    res.json(products);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to fetch products' });
  }
}

export async function getProduct(req: Request, res: Response) {
  try {
    const slug = req.params.slug;
    const snap = await db.collection('products').where('slug', '==', slug).limit(1).get();
    if (snap.empty) {
      const local = SAMPLE_PRODUCTS.find((p) => p.slug === slug);
      if (!local) return res.status(404).json({ error: 'Product not found' });
      return res.json(local);
    }
    const doc = snap.docs[0];
    res.json({ id: doc.id, ...(doc.data() as Product) });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to fetch product' });
  }
}