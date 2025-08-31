import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3, S3_BUCKET } from '../config/s3.js';
import { ProductImage } from '../models/ProductImage.js';
import { Product } from '../models/Product.js';
import { catchAsync } from '../utils/catchAsync.js';
import { randomUUID } from 'crypto';

export const uploadProductImage = catchAsync(async (req, res) => {
  if (!S3_BUCKET) return res.status(500).json({ success: false, message: 'S3 bucket not configured' });
  if (!req.file) return res.status(400).json({ success: false, message: 'No file uploaded' });

  const productId = req.body.productId;
  const product = await Product.findByPk(productId);
  if (!product) return res.status(404).json({ success: false, message: 'Product not found' });

  const ext = (req.file.originalname.split('.').pop() || 'bin').toLowerCase();
  const key = `products/${productId}/${randomUUID()}.${ext}`;

  await s3.send(new PutObjectCommand({
    Bucket: S3_BUCKET,
    Key: key,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
    ACL: 'public-read'
  }));

  const url = `https://${S3_BUCKET}.s3.${process.env.AWS_REGION || 'ap-south-1'}.amazonaws.com/${key}`;
  const img = await ProductImage.create({ productId, key, url });
  res.status(201).json({ success: true, image: img });
});
