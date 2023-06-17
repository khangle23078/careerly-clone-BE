import { Request, Response } from 'express';
import cloudinary from '../config/cloudianry.config';

export const uploadFile = (req: Request, res: Response) => {
  try {
    if (req.file) {
      const image: any = req.file;
      return res.status(200).json({
        status: 200,
        message: 'Upload file success',
        data: {
          url: image.path,
          public_id: image.filename,
        },
      });
    }
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      error: true,
      message: error,
    });
  }
};

export const deleteFile = async (req: Request, res: Response) => {
  try {
    const { publicId } = req.body;
    await cloudinary.uploader.destroy(publicId);
    res.status(200).json({
      status: 200,
      message: 'Delete file success',
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: true,
      message: error,
    });
  }
};
