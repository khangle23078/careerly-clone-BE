import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDb } from './database/connect';
import authRoute from './routes/auth.route';
import postRoute from './routes/post.route';
import commentRoute from './routes/comment.route';
import uploadRoute from './routes/upload.route';

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use('/api', authRoute);
app.use('/api', postRoute);
app.use('/api', commentRoute);
app.use('/api', uploadRoute);
connectDb();

export default app;
