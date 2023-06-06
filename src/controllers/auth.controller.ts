import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user.model';
import { createAccessToken, createRefreshToken } from '../utils/jwt';

export const register = async (req: Request, res: Response) => {
  try {
    const { userName, email, password } = req.body;

    const emailExist = await User.findOne({ userName: email });
    if (emailExist) {
      throw new Error('Username already exists!!');
    }
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
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      error: true,
      message: error.message,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const emailExist = await User.findOne({ email: email });
    if (!emailExist) {
      throw new Error("Email doesn't exist");
    }

    const checkPassword = await bcrypt.compare(password, emailExist.password);
    console.log(checkPassword);
    if (!checkPassword) {
      throw new Error("Password doesn't match");
    }

    const accessToken = createAccessToken(email);
    const refreshToken = createRefreshToken(email);

    res.status(200).json({
      status: 200,
      message: 'Login success',
      data: {
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      error: true,
      message: error.message,
    });
  }
};
