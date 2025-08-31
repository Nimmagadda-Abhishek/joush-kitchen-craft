import { Router } from 'express';
import authRoutes from './auth.routes.js';
import usersRoutes from './users.routes.js';
import categoriesRoutes from './categories.routes.js';
import productsRoutes from './products.routes.js';
import uploadsRoutes from './uploads.routes.js';
import cartRoutes from './cart.routes.js';
import ordersRoutes from './orders.routes.js';
import adminRoutes from './admin.routes.js';

const router = Router();
router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
router.use('/categories', categoriesRoutes);
router.use('/products', productsRoutes);
router.use('/uploads', uploadsRoutes);
router.use('/cart', cartRoutes);
router.use('/orders', ordersRoutes);
router.use('/admin', adminRoutes);

export default router;
