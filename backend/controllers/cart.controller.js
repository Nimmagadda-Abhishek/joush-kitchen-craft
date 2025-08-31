import { CartItem } from '../models/CartItem.js';
import { Product } from '../models/Product.js';
import { addToCartSchema } from '../utils/validators.js';
import { catchAsync } from '../utils/catchAsync.js';

export const getCart = catchAsync(async (req, res) => {
  const items = await CartItem.findAll({ where: { userId: req.user.id }, include: [{ model: Product }] });
  const total = items.reduce((sum, it) => sum + Number(it.Product.price) * it.quantity, 0);
  res.json({ success: true, items, total });
});

export const addToCart = catchAsync(async (req, res) => {
  const { value, error } = addToCartSchema.validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error.message });
  const [item, created] = await CartItem.findOrCreate({
    where: { userId: req.user.id, productId: value.productId },
    defaults: { quantity: value.quantity }
  });
  if (!created) { item.quantity += value.quantity; await item.save(); }
  res.status(201).json({ success: true, item });
});

export const updateCartItem = catchAsync(async (req, res) => {
  const { quantity } = req.body;
  const item = await CartItem.findOne({ where: { userId: req.user.id, id: req.params.id } });
  if (!item) return res.status(404).json({ success: false, message: 'Item not found' });
  item.quantity = Math.max(1, Number(quantity || 1));
  await item.save();
  res.json({ success: true, item });
});

export const removeCartItem = catchAsync(async (req, res) => {
  const item = await CartItem.findOne({ where: { userId: req.user.id, id: req.params.id } });
  if (!item) return res.status(404).json({ success: false, message: 'Item not found' });
  await item.destroy();
  res.json({ success: true });
});
