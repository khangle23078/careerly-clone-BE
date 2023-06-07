import { Router } from 'express';
import { verifyToken } from '../middlewares/auth.middleware';
import { createComment } from '../controllers/comment.controller';

const route = Router();

route.post('/comment/:id', verifyToken, createComment);

export default route;
