import { Router } from 'express';
import { me, listUsers } from '../controllers/users.controller.js';
import { auth } from '../middleware/auth.js';

const router = Router();
router.get('/me', auth(), me);
router.get('/', auth('admin'), listUsers);

export default router;
