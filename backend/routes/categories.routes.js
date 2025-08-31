import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { createCategory, listCategories, updateCategory, deleteCategory } from '../controllers/categories.controller.js';

const router = Router();
router.get('/', listCategories);
router.post('/', auth('admin'), createCategory);
router.patch('/:id', auth('admin'), updateCategory);
router.delete('/:id', auth('admin'), deleteCategory);

export default router;
