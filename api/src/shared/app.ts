/* eslint-disable no-console */
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import routes from '@shared/routes/index';
import AppError from '@shared/errors/AppError';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.use((_request: Request, _response: Response, _next: NextFunction) => {
  throw new AppError('Invalid route', 404);
});

app.use(
  (err: Error, _request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'Error',
        message: err.message,
        code: err.code,
      });
    }

    console.error('err : ', err);

    return response.status(500).json({
      status: 'Error',
      message: `Internal Server Error : ${err.message}`,
    });
  },
);

export default app;
