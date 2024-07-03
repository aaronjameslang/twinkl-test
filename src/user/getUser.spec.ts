import { randomUUID } from 'crypto';
import request from 'supertest';
import { testServer } from '../testServer';

describe('GET /user', () => {
  it('should return 404', async () => {
    await request(testServer)
      .get(`/user/${randomUUID()}`)
      .expect(404);
  });
  it.todo('should return the user');
});
