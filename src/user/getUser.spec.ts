import { randomUUID } from 'crypto';
import request from 'supertest';
import { app } from '../app';
import { fakeUser } from './User.spec';
import { saveUser } from './saveUser';

describe('GET /user', () => {
  it('should return 404', async () => {
    await request(app)
      .get(`/user/${randomUUID()}`)
      .expect(404);
  });
  it('should return the user', async () => {
    const id = randomUUID();
    const user = { ...fakeUser(), id };
    saveUser(user);
    const response = await request(app)
      .get(`/user/${id}`);
    expect(response.body).toEqual(user);
  });
});
