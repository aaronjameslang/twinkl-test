import express from 'express';
import request from 'supertest';
import { z } from 'zod';
import { handleZodError } from './handleZodError';

describe('handleZodError', () => {
  it('return 422 for ZodErrors', async () => {
    const app = express();
    app.get('/error', () => {
      z.boolean().parse('not a boolean');
    });
    app.use(handleZodError);
    await request(app)
      .get('/error')
      .expect(422);
  });
  it('return 500 for other Errors', async () => {
    const app = express();
    app.get('/error', () => {
      throw new Error();
    });
    app.use(handleZodError);
    await request(app)
      .get('/error')
      .expect(500);
  });
});
