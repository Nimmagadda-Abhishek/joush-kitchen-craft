import { Request, Response, NextFunction } from 'express';
import { initFirebase } from '../config/firebase';

const admin = initFirebase();

export interface AuthedRequest extends Request {
  user?: import('../config/firebase').DecodedUser;
}

export function authOptional(req: AuthedRequest, _res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : undefined;
  if (!token) return next();
  admin
    .auth()
    .verifyIdToken(token)
    .then((decoded) => {
      req.user = decoded;
      next();
    })
    .catch(() => next());
}

export function authRequired(req: AuthedRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : undefined;
  if (!token) return res.status(401).json({ error: 'Missing Authorization Bearer token' });
  admin
    .auth()
    .verifyIdToken(token)
    .then((decoded) => {
      req.user = decoded;
      next();
    })
    .catch(() => res.status(401).json({ error: 'Invalid token' }));
}