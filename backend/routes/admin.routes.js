import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { dashboardStats, updateOrderStatus } from '../controllers/admin.controller.js';

const router = Router();
router.use(auth('admin'));
router.get('/stats', dashboardStats);
router.patch('/orders/:id/status', updateOrderStatus);

export default router;
