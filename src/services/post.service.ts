import Post from '../models/post.model';

export const getAll = (limit: number, skip: number) => {
  return Post.find().limit(limit).skip(skip);
};
