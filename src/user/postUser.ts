import { randomUUID } from 'crypto';
import { Request, Response } from 'express';
import { UserWithoutId } from './User';
import { saveUser } from './saveUser';

export function postUser(req: Request, res: Response) {
  const user = UserWithoutId.parse(req.body);
  const id = randomUUID();
  saveUser({ ...user, id });
  res.sendStatus(201); // Created
}
