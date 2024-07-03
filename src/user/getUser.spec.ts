import { randomUUID } from 'crypto';
import request from 'supertest';
import { testServer } from '../testServer';
import { VALID_TEST_USER } from './User.spec';
import { saveUser } from './saveUser';

describe('GET /user', () => {
  it('should return 404', async () => {
    await request(testServer)
      .get(`/user/${randomUUID()}`)
      .expect(404);
  });
  it('should return the user', async () => {
    const id = randomUUID();
    saveUser({ ...VALID_TEST_USER, id });
    const response = await request(testServer)
      .get(`/user/${id}`);
    expect(response.body).toEqual({ ...VALID_TEST_USER, id });
  });
});
