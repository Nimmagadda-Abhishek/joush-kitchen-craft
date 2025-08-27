import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { getDb } from '../config/firebase';

const db = getDb();

export async function createIntent(req: Request, res: Response) {
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
}

export async function confirmIntent(req: Request, res: Response) {
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
}