import request from 'supertest';
import { testServer } from '../testServer';

describe('POST /user', () => {
  it('should return 201', async () => {
    const user = {
      name: 'Alice',
      email: 'alice@example.com',
      password: 'Password1',
      type: 'teacher',
    };
    await request(testServer)
      .post('/user')
      .send(user)
      .expect(201);
  });
});
