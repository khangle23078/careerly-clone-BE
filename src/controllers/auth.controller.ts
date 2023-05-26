import { Request, Response } from 'express';
import User from '../models/user.model';

export const register = async (req: Request, res: Response) => {
  try {
    const { userName, email, password } = req.body;
    const user = new User({
      userName,
      email,
      password,
    });

    await user.save();
    res.status(200).json({
      status: 200,
      error: false,
      message: 'Register success!!',
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: true,
      message: error,
    });
  }
};
