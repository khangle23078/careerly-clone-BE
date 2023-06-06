import { Router } from 'express';
import { getPost, getPosts } from '../controllers/post.controller';

const route = Router();

route.get('/posts', getPosts);
route.get('/post/:id', getPost);

export default route;
