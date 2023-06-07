import { Schema, Types, model } from 'mongoose';
import { IPost } from '../interfaces/post';

const postSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      require: true,
    },
    author: {
      type: Types.ObjectId,
      ref: 'User',
    },
    content: {
      type: String,
      require: true,
    },
    like_count: [
      {
        type: Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model('post', postSchema);
