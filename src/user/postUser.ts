import { NextFunction, Request, Response } from 'express';
import { UserInput } from './User';
import { createUserRecord } from './createUserRecord';
import { saveUser } from './saveUser';

export function postUser(req: Request, res: Response, next: NextFunction) {
  const user = UserInput.parse(req.body);
  createUserRecord(user)
    .then((record) => {
      saveUser(record);
      res
        .status(201) // Created
        .send({ id: record.id });
    })
    .catch(next);
}
