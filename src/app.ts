import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

export default app;