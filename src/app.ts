import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express';
import { handleZodError } from './handleZodError';
import { getUser } from './user/getUser';
import { postUser } from './user/postUser';

export const app: Express = express();

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/user/:id', getUser);
app.post('/user', postUser);

app.use(handleZodError);
