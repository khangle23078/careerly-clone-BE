import { Schema, Types, model } from 'mongoose';

const commentSchema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: 'User',
    },
    content: {
      type: String,
      require,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Comment', commentSchema);
