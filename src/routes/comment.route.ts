import { Router } from 'express';
import { verifyToken } from '../middlewares/auth.middleware';
import { createComment, editComment } from '../controllers/comment.controller';

const route = Router();

route.post('/comment/:id', verifyToken, createComment);
route.put('/comment/:id', verifyToken, editComment);

export default route;
