import { Order } from '../models/Order.js';
import { Product } from '../models/Product.js';
import { catchAsync } from '../utils/catchAsync.js';

export const dashboardStats = catchAsync(async (req, res) => {
  const orders = await Order.count();
  const products = await Product.count();
  const revenue = (await Order.findAll({ attributes: ['totalAmount'] }))
    .reduce((s, o) => s + Number(o.totalAmount || 0), 0);
  res.json({ success: true, stats: { orders, products, revenue } });
});

export const updateOrderStatus = catchAsync(async (req, res) => {
  const order = await Order.findByPk(req.params.id);
  if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
  order.status = req.body.status || order.status;
  await order.save();
  res.json({ success: true, order });
});
