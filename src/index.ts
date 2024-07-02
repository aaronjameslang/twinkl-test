import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express';
import { handleZodError } from './handleZodError';
import { getUser } from './user/getUser';
import { postUser } from './user/postUser';

export const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/user/:id', getUser);
app.post('/user', postUser);

app.use(handleZodError);

if (module === require.main) {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}
