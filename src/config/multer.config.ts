import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudianry.config';

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Careerly-clone',
  } as { folder: string },
});

export const upload = multer({ storage: storage });
