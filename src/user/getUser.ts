import { Request, Response } from 'express';
import { UserId } from './UserId';
import { loadUser } from './loadUser';

export function getUser(req: Request, res: Response) {
  const id = UserId.parse(req.params.id);
  const record = loadUser(id);
  if (!record) {
    res.sendStatus(404); // Not Found
    return;
  }
  const output = {
    ...record,
    digest: undefined,
    salt: undefined,
  };
  res.send(output);
}
