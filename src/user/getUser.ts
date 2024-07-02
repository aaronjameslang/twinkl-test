import { Request, Response } from 'express';
import { UserId } from './UserId';
import { loadUser } from './loadUser';

export function getUser(req: Request, res: Response) {
  const id = UserId.parse(req.params.id);
  const user = loadUser(id);
  if (!user) {
    res.sendStatus(404); // Not Found
    return;
  }
  res.send(user);
}
