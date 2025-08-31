import jwt from 'jsonwebtoken';

export const auth = (roles = []) => {
  if (typeof roles === 'string') roles = [roles];
  return (req, res, next) => {
    try {
      const header = req.headers.authorization || '';
      const token = header.startsWith('Bearer ') ? header.slice(7) : null;
      if (!token) return res.status(401).json({ success: false, message: 'Unauthorized' });
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = payload;
      if (roles.length && !roles.includes(payload.role)) {
        return res.status(403).json({ success: false, message: 'Forbidden' });
      }
      next();
    } catch {
      return res.status(401).json({ success: false, message: 'Invalid or expired token' });
    }
  };
};
