import { IPost } from '../interfaces/post';
import Post from '../models/post.model';

export const getAll = (limit: number, skip: number) => {
  return Post.find()
    .limit(limit)
    .skip(skip)
    .populate('author', '_id userName')
    .populate('like_count', '_id userName')
    .populate('comments.user', '_id userName');
};

export const getById = (id: string) => {
  return Post.findById(id)
    .populate('author', '_id userName')
    .populate('like_count', '_id userName')
    .populate('comments.user', '_id userName');
};

export const insertOne = (data: IPost) => {
  return Post.create(data);
};
