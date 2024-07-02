import { Request, Response } from 'express';
import { loadUser } from './loadUser';

export function getUser(req: Request, res: Response) {
  const { id } = req.params;
  const user = loadUser(id);
  if (!user) {
    res.sendStatus(404); // Not Found
    return;
  }
  res.send(user);
}
