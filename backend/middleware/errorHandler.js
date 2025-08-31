import { ApiError } from '../utils/ApiError.js';

export function notFound(req, res, next) {
  next(new ApiError(404, 'Route not found'));
}

export function errorHandler(err, req, res, next) { // eslint-disable-line
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  if (process.env.NODE_ENV !== 'production') console.error(err);
  res.status(status).json({ success: false, message, details: err.details });
}
