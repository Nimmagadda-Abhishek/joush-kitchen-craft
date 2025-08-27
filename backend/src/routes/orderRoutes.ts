import { Router } from 'express';
import { checkout } from '../controllers/orderController';
import { authRequired } from '../middlewares/auth';

const router = Router();

router.post('/checkout', authRequired, checkout);

export default router;