import Joi from 'joi';

export const signupSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(100).required(),
  role: Joi.string().valid('customer','admin').default('customer')
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export const categorySchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  description: Joi.string().allow('', null)
});

export const productSchema = Joi.object({
  name: Joi.string().min(2).max(120).required(),
  description: Joi.string().allow('', null),
  price: Joi.number().precision(2).positive().required(),
  stock: Joi.number().integer().min(0).default(0),
  categoryId: Joi.number().integer().required(),
  isActive: Joi.boolean().default(true)
});

export const addToCartSchema = Joi.object({
  productId: Joi.number().integer().required(),
  quantity: Joi.number().integer().min(1).default(1)
});

export const addressSchema = Joi.object({
  line1: Joi.string().required(),
  line2: Joi.string().allow('', null),
  city: Joi.string().required(),
  state: Joi.string().required(),
  postalCode: Joi.string().required(),
  country: Joi.string().default('India')
});
