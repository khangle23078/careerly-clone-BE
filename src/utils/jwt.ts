import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/user';

export const createAccessToken = (data: Omit<IUser, 'userName'>) => {
  return jwt.sign({ data }, 'L5BmHN0z70', { expiresIn: '24h' });
};

export const createRefreshToken = (data: Omit<IUser, 'userName'>) => {
  return jwt.sign({ data }, 'L5BmHN0z70', { expiresIn: '30d' });
};
