import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

export const handleZodError: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ZodError) {
    res.status(422).send({ zod: err.errors });
  } else {
    next(err);
  }
};
