import { Router } from 'express';
import multer from 'multer';
import { uploadProductImage } from '../controllers/uploads.controller.js';
import { auth } from '../middleware/auth.js';

const router = Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5 * 1024 * 1024 } });

router.post('/product-image', auth('admin'), upload.single('image'), uploadProductImage);

export default router;
