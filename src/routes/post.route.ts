import { Router } from 'express';
import { getPosts } from '../controllers/post.controller';

const route = Router();

route.get('/posts', getPosts);

export default route;
