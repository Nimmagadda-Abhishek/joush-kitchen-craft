import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { placeOrder, myOrders, getOrder } from '../controllers/orders.controller.js';

const router = Router();
router.use(auth());
router.post('/', placeOrder);
router.get('/', myOrders);
router.get('/:id', getOrder);

export default router;
