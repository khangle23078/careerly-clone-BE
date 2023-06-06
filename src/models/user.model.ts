import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser } from '../interfaces/user';

const userSchema = new Schema<IUser>({
  userName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  is_followed: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
  },
});

userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (error) {
    console.log(error);
  }
});

export default model('User', userSchema);
