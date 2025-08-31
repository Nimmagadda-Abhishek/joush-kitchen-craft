import { User } from '../models/User.js';
import { catchAsync } from '../utils/catchAsync.js';

export const me = catchAsync(async (req, res) => {
  const user = await User.findByPk(req.user.id, { attributes: ['id','name','email','role','createdAt'] });
  res.json({ success: true, user });
});

export const listUsers = catchAsync(async (req, res) => {
  const users = await User.findAll({ attributes: ['id','name','email','role','createdAt'] });
  res.json({ success: true, users });
});
