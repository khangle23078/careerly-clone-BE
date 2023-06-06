import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDb } from './database/connect';
import authRoute from './routes/auth.route';
import postRoute from './routes/post.route';

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan('combined'));
app.use('/api', authRoute);
app.use('/api', postRoute);
connectDb();

export default app;
