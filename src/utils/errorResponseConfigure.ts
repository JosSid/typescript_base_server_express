import { Request, Response, NextFunction } from 'express';
import createError, { HttpError } from 'http-errors';

export default function errorHandler(
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
  res.status(status).json({ status, message });
}
