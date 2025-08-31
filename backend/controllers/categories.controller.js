import { Category } from '../models/Category.js';
import { categorySchema } from '../utils/validators.js';
import { catchAsync } from '../utils/catchAsync.js';

export const createCategory = catchAsync(async (req, res) => {
  const { value, error } = categorySchema.validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error.message });
  const cat = await Category.create(value);
  res.status(201).json({ success: true, category: cat });
});

export const listCategories = catchAsync(async (req, res) => {
  const categories = await Category.findAll();
  res.json({ success: true, categories });
});

export const updateCategory = catchAsync(async (req, res) => {
  const cat = await Category.findByPk(req.params.id);
  if (!cat) return res.status(404).json({ success: false, message: 'Category not found' });
  await cat.update(req.body);
  res.json({ success: true, category: cat });
});

export const deleteCategory = catchAsync(async (req, res) => {
  const cat = await Category.findByPk(req.params.id);
  if (!cat) return res.status(404).json({ success: false, message: 'Category not found' });
  await cat.destroy();
  res.json({ success: true });
});
