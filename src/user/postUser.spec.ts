import request from 'supertest';
import { testServer } from '../testServer';
import { VALID_TEST_USER } from './User.spec';

describe('POST /user', () => {
  it('should return 201', async () => {
    await request(testServer)
      .post('/user')
      .send(VALID_TEST_USER)
      .expect(201);
  });
  it('should return user ID', async () => {
    const response = await request(testServer)
      .post('/user')
      .send(VALID_TEST_USER);
    const { id } = response.body;
    expect(typeof id).toBe('string');
    expect(id).toHaveLength(36);
  });
});
