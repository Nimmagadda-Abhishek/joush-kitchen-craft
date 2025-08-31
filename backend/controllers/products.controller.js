import { Product } from '../models/Product.js';
import { ProductImage } from '../models/ProductImage.js';
import { Category } from '../models/Category.js';
import { productSchema } from '../utils/validators.js';
import { catchAsync } from '../utils/catchAsync.js';

export const createProduct = catchAsync(async (req, res) => {
  const { value, error } = productSchema.validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error.message });
  const prod = await Product.create(value);
  res.status(201).json({ success: true, product: prod });
});

export const listProducts = catchAsync(async (req, res) => {
  const { categoryId, page=1, limit=12 } = req.query;
  const where = { isActive: true };
  if (categoryId) where.categoryId = categoryId;
  const offset = (Number(page)-1) * Number(limit);
  const { rows, count } = await Product.findAndCountAll({
    where,
    include: [{ model: Category }, { model: ProductImage, as: 'images' }],
    order: [['createdAt','DESC']],
    offset,
    limit: Number(limit)
  });
  res.json({ success: true, products: rows, total: count, page: Number(page), pages: Math.ceil(count/Number(limit)) });
});

export const getProduct = catchAsync(async (req, res) => {
  const prod = await Product.findByPk(req.params.id, { include: [{ model: ProductImage, as: 'images' }, { model: Category }] });
  if (!prod) return res.status(404).json({ success: false, message: 'Product not found' });
  res.json({ success: true, product: prod });
});

export const updateProduct = catchAsync(async (req, res) => {
  const prod = await Product.findByPk(req.params.id);
  if (!prod) return res.status(404).json({ success: false, message: 'Product not found' });
  await prod.update(req.body);
  res.json({ success: true, product: prod });
});

export const deleteProduct = catchAsync(async (req, res) => {
  const prod = await Product.findByPk(req.params.id);
  if (!prod) return res.status(404).json({ success: false, message: 'Product not found' });
  await prod.destroy();
  res.json({ success: true });
});
