import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    const url =
      'mongodb+srv://khangle2307:khang123@cluster0.r5upo3m.mongodb.net/';
    await mongoose.connect(url, {
      dbName: 'careerly-clone',
    });
    console.log('Connect database success!!');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
