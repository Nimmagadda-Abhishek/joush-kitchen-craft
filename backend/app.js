import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimiter } from './middleware/rateLimiter.js';
import router from './routes/index.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

const ORIGIN = process.env.CORS_ORIGIN || '*';

export const app = express();
app.use(helmet());
app.use(cors({ origin: ORIGIN, credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);

app.get('/health', (req, res) => res.json({ ok: true, uptime: process.uptime() }));
app.use('/api', router);

app.use(notFound);
app.use(errorHandler);
