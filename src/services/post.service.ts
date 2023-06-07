import { IPost } from '../interfaces/post';
import Post from '../models/post.model';

export const getAll = (limit: number, skip: number) => {
  return Post.find()
    .limit(limit)
    .skip(skip)
    .populate('author', '_id userName')
    .populate('like_count', '_id userName')
    .populate('comments');
};

export const getById = (id: string) => {
  return Post.findById(id)
    .populate('author', '_id userName')
    .populate('like_count', '_id userName')
    .populate('comments');
};

export const insertOne = (data: IPost) => {
  return Post.create(data);
};

export const updateOne = (id: string, data: Omit<IPost, 'id'>) => {
  return Post.findByIdAndUpdate(id, data, { new: true });
};

export const deleteOne = (id: string) => {
  return Post.findByIdAndDelete(id, { new: true });
};
