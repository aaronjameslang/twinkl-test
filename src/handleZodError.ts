import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

/**
 * A handler to catch ZodErrors and send a 422 response with the errors.
 * Without this handler, ZodErrors would cause a generic 500 response.
 * @see https://expressjs.com/en/guide/error-handling.html
 */
export const handleZodError: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ZodError) {
    res.status(422).send({ zod: err.errors });
  } else {
    next(err);
  }
};
