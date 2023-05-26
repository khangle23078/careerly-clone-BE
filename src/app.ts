import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { connectDb } from './database/connect';
import authRoute from './routes/auth.route';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use('/api', authRoute);
connectDb();

export default app;
