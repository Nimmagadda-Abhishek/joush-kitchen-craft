import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { getCart, addToCart, updateCartItem, removeCartItem } from '../controllers/cart.controller.js';

const router = Router();
router.use(auth());
router.get('/', getCart);
router.post('/', addToCart);
router.patch('/:id', updateCartItem);
router.delete('/:id', removeCartItem);

export default router;
