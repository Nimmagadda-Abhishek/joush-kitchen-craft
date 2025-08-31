import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../models/User.js';
import { signupSchema, loginSchema } from '../utils/validators.js';
import { catchAsync } from '../utils/catchAsync.js';

const signTokens = (user) => {
  const payload = { id: user.id, role: user.role, name: user.name };
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '15m' });
  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET, { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d' });
  return { accessToken, refreshToken };
};

export const signup = catchAsync(async (req, res) => {
  const { value, error } = signupSchema.validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error.message });
  const exists = await User.findOne({ where: { email: value.email } });
  if (exists) return res.status(409).json({ success: false, message: 'Email already registered' });
  const passwordHash = await bcrypt.hash(value.password, 10);
  const user = await User.create({ name: value.name, email: value.email, passwordHash, role: value.role });
  const tokens = signTokens(user);
  res.status(201).json({ success: true, user: { id: user.id, name: user.name, email: user.email, role: user.role }, ...tokens });
});

export const login = catchAsync(async (req, res) => {
  const { value, error } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ success: false, message: error.message });
  const user = await User.findOne({ where: { email: value.email } });
  if (!user) return res.status(404).json({ success: false, message: 'User not found' });
  const ok = await user.comparePassword(value.password);
  if (!ok) return res.status(401).json({ success: false, message: 'Invalid credentials' });
  const tokens = signTokens(user);
  res.json({ success: true, user: { id: user.id, name: user.name, email: user.email, role: user.role }, ...tokens });
});

export const refresh = catchAsync(async (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(400).json({ success: false, message: 'Refresh token required' });
  try {
    const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET);
    const user = await User.findByPk(payload.id);
    if (!user) return res.status(401).json({ success: false, message: 'Invalid token' });
    const tokens = signTokens(user);
    res.json({ success: true, ...tokens });
  } catch {
    return res.status(401).json({ success: false, message: 'Invalid or expired refresh token' });
  }
});
