import { Router } from 'express';
import { verifyToken } from '../middlewares/auth.middleware';
import {
  createComment,
  deleteComment,
  editComment,
  getComments,
} from '../controllers/comment.controller';

const route = Router();

route.get('/comments', verifyToken, getComments);
route.post('/comment/:id', verifyToken, createComment);
route.put('/comment/:id', verifyToken, editComment);
route.delete('/comment/:id', verifyToken, deleteComment);

export default route;
