import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { authOptional } from './middlewares/auth';
import productRoutes from './routes/productRoutes';
import cartRoutes from './routes/cartRoutes';
import paymentRoutes from './routes/paymentRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(authOptional);

// Health
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'joush-backend', timestamp: Date.now() });
});

// Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api', orderRoutes); // exposes POST /api/checkout

const port = process.env.PORT ? Number(process.env.PORT) : 4000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => console.log(`[server] listening on http://localhost:${port}`));
}

export default app; // for serverless / tests