import { Router } from 'express';
import { uploadFile } from '../controllers/upload.controllder';
import { upload } from '../config/multer.config';

const route = Router();

route.post('/upload', upload.single('image'), uploadFile);

export default route;
