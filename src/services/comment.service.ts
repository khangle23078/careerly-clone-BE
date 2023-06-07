import Comment from '../models/comment.model';

export const getAll = () => {
  return Comment.find();
};

export const editById = (id: string) => {
  return Comment.findByIdAndUpdate(id).exec();
};

export const deleteById = (id: string) => {
  return Comment.findByIdAndDelete(id).exec();
};
