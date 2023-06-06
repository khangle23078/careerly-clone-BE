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
    like_count: {
      type: Types.ObjectId,
      ref: 'User',
    },
    share_count: {
      type: Types.ObjectId,
      ref: 'User',
    },
    comments: [
      {
        user: {
          type: Types.ObjectId,
          ref: 'User',
        },
        content: {
          type: String,
          require: true,
        },
        create_At: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model('post', postSchema);
