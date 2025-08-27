import { Router } from 'express';
import { confirmIntent, createIntent } from '../controllers/paymentController';

const router = Router();

router.post('/create-intent', createIntent);
router.post('/confirm', confirmIntent);

export default router;