import request from 'supertest';
import { testServer } from '../testServer';

describe('POST /user', () => {
  it('should return 201', async () => {
    await request(testServer)
      .post('/user')
      .send({ name: 'Alice' })
      .expect(201);
  });
});
