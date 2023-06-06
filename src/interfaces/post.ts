import { ICommnent } from './comment';
import { IUser } from './user';

export interface IPost {
  title: string;
  author: IUser;
  content: string;
  like_count: IUser;
  share_count: IUser;
  comments: ICommnent[];
}
