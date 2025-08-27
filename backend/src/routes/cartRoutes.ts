import { Router } from 'express';
import { addItem, getMyCart, removeItem } from '../controllers/cartController';
import { authRequired } from '../middlewares/auth';

const router = Router();

router.get('/me', authRequired, getMyCart);
router.post('/me/items', authRequired, addItem);
router.delete('/me/items/:id', authRequired, removeItem);

export default router;