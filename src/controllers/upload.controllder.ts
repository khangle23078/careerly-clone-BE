import { Request, Response } from 'express';

export const uploadFile = (req: Request, res: Response) => {
  try {
    if (req.file) {
      const image: any = req.file;
      return res.status(200).json({
        status: 200,
        error: false,
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
