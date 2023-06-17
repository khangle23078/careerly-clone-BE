import { Router } from 'express';
import { deleteFile, uploadFile } from '../controllers/upload.controllder';
import { upload } from '../config/multer.config';

const route = Router();

route.post('/file/upload', upload.single('image'), uploadFile);
route.post('/file/destroy', deleteFile);
export default route;
