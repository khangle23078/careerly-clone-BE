import { Request, Response } from 'express';
import { getAll, getById, insertOne } from '../services/post.service';

export const getPosts = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const posts = await getAll(limit, skip);
    return res.status(200).json({
      status: 200,
      error: false,
      paginate: {
        totalPage: posts.length / limit,
        page: page,
        itemPerPage: limit,
      },
      data: posts,
    });
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      error: true,
      message: error.message,
    });
  }
};

export const getPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(id);

    const post = await getById(id);
    return res.status(200).json({
      status: 200,
      error: false,
      data: post,
    });
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      error: true,
      message: error.message,
    });
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    await insertOne(req.body);
    return res.status(201).json({
      status: 200,
      error: false,
      message: 'Create post success',
    });
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      error: true,
      message: error.message,
    });
  }
};
