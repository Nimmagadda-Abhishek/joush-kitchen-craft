import { sequelize } from '../models/index.js';
import { CartItem } from '../models/CartItem.js';
import { Product } from '../models/Product.js';
import { Order } from '../models/Order.js';
import { OrderItem } from '../models/OrderItem.js';
import { Address } from '../models/Address.js';
import { catchAsync } from '../utils/catchAsync.js';

export const placeOrder = catchAsync(async (req, res) => {
  const { addressId, paymentMethod = 'COD' } = req.body;
  const address = await Address.findOne({ where: { id: addressId, userId: req.user.id } });
  if (!address) return res.status(400).json({ success: false, message: 'Valid address required' });

  const cartItems = await CartItem.findAll({ where: { userId: req.user.id }, include: [{ model: Product }] });
  if (cartItems.length === 0) return res.status(400).json({ success: false, message: 'Cart is empty' });

  const order = await sequelize.transaction(async (t) => {
    let total = 0;
    for (const item of cartItems) {
      if (item.quantity > item.Product.stock) throw new Error('Insufficient stock for ' + item.Product.name);
    }

    const order = await Order.create({ userId: req.user.id, status: 'pending', paymentMethod, addressSnapshot: address.toJSON() }, { transaction: t });

    for (const item of cartItems) {
      const price = Number(item.Product.price);
      total += price * item.quantity;
      await OrderItem.create({ orderId: order.id, productId: item.productId, price, quantity: item.quantity }, { transaction: t });
      item.Product.stock -= item.quantity;
      await item.Product.save({ transaction: t });
    }

    order.totalAmount = total;
    await order.save({ transaction: t });
    await CartItem.destroy({ where: { userId: req.user.id }, transaction: t });
    return order;
  });

  res.status(201).json({ success: true, order });
});

export const myOrders = catchAsync(async (req, res) => {
  const orders = await Order.findAll({ where: { userId: req.user.id }, include: [{ model: OrderItem, as: 'items', include: [Product] }] });
  res.json({ success: true, orders });
});

export const getOrder = catchAsync(async (req, res) => {
  const order = await Order.findByPk(req.params.id, { include: [{ model: OrderItem, as: 'items', include: [Product] }] });
  if (!order || order.userId !== req.user.id) return res.status(404).json({ success: false, message: 'Order not found' });
  res.json({ success: true, order });
});
