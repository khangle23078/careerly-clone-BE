import { Router } from 'express';
import { createPost, getPost, getPosts } from '../controllers/post.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const route = Router();

route.get('/posts', verifyToken, getPosts);
route.get('/post/:id', verifyToken, getPost);
route.post('/post', verifyToken, createPost);

export default route;
