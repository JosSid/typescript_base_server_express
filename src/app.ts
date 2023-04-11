import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { router } from './routes';
import db from './config/mongo';
import createError from 'http-errors';
import errorResponser from './utils/errorResponseConfigure';

const PORT = process.env.PORT || 3001;

const SERVER_NAME = 'jossid_factory';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use('/api', router);

app.use((req, res, next) => {
  const error = createError(404, "This is not the page you're looking for...");
  next(error);
});

// error handler
app.use(errorResponser);

db().then(() => console.log(`Connected to ${SERVER_NAME} DB`));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
