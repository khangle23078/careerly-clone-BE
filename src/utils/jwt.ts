import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/user';

export const createAccessToken = (data: Omit<IUser, 'userName'>) => {
  return jwt.sign({ data }, process.env.SECRET_KEY as string, {
    expiresIn: '24h',
  });
};

export const createRefreshToken = (data: Omit<IUser, 'userName'>) => {
  return jwt.sign({ data }, process.env.SECRET_KEY as string, {
    expiresIn: '30d',
  });
};
