import express from 'express';
import userRouter from './user/userRoutes.js';
import mediaContentRouter from './mediaContent/mediaContentRoutes.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use(express.json());

app.use('/api', userRouter);
app.use('/api', mediaContentRouter);

app.use(errorHandler);

export default app;
