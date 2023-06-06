import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
    if (!decoded) {
      return res.status(401).json({
        message: 'Invalid token',
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Token is expired',
    });
  }
};
