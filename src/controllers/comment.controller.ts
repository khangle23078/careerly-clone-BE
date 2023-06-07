import { Request, Response } from 'express';
import Comment from '../models/comment.model';
import { deleteById, editById, getAll } from '../services/comment.service';

export const getComments = async (req: Request, res: Response) => {
  try {
    const comments = await getAll();
    res.status(200).json({
      status: 200,
      error: false,
      data: comments,
    });
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      error: true,
      message: error.message,
    });
  }
};

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

export const editComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await editById(id);
    res.status(200).json({
      status: 200,
      error: false,
      message: 'Edit comment success',
    });
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      error: true,
      message: error.message,
    });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    res.status(200).json({
      status: 200,
      error: false,
      message: 'Delete comment success',
    });
    await deleteById(id);
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      error: true,
      message: error.message,
    });
  }
};
