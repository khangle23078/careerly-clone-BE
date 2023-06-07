import { Request, Response } from 'express';
import Comment from '../models/comment.model';

export const createComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const comment = new Comment({
      user: id,
      content: content,
    });
    await comment.save();
    res.status(201).json({
      status: 201,
      error: false,
      message: 'Create comment success',
    });
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      error: true,
      message: error.message,
    });
  }
};
