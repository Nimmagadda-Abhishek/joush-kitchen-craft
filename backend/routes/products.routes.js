import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { createProduct, listProducts, getProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js';

const router = Router();
router.get('/', listProducts);
router.get('/:id', getProduct);
router.post('/', auth('admin'), createProduct);
router.patch('/:id', auth('admin'), updateProduct);
router.delete('/:id', auth('admin'), deleteProduct);

export default router;
