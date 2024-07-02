import { randomUUID } from 'crypto';
import { Request, Response } from 'express';
import { User } from './User';
import { saveUser } from './saveUser';

export function postUser(req: Request, res: Response) {
  // TODO validation
  const user: User = req.body;
  user.id = randomUUID();
  saveUser(user);
  res.sendStatus(201); // Created
}
