import { Router } from 'express';
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from '../controllers/post.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const route = Router();

route.get('/posts', verifyToken, getPosts);
route.get('/post/:id', verifyToken, getPost);
route.post('/post', verifyToken, createPost);
route.put('/post/:id', verifyToken, updatePost);
route.delete('/post/:id', verifyToken, deletePost);

export default route;
