import request from 'supertest';
import { server } from '.';
import { port } from './port';

afterAll(() => {
  server.close();
});

describe('index', () => {
  it(`should listen on ${port}`, async () => {
    await request(`http://localhost:${port}`)
      .get('/')
      .expect(200);
  });
});
