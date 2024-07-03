import { randomUUID } from 'crypto';
import request from 'supertest';
import { app } from '../app';
import { fakeUser } from './fakeUser';
import { saveUser } from './saveUser';

describe('GET /user', () => {
  it('should return 404', async () => {
    await request(app)
      .get(`/user/${randomUUID()}`)
      .expect(404);
  });
  it('should return the user', async () => {
    const user = fakeUser();
    const record = await user.getRecord();
    saveUser(record);
    const response = await request(app)
      .get(`/user/${user.output.id}`);
    expect(response.body).toEqual(user.output);
  });
  it('should not return any password data', async () => {
    const user = fakeUser();
    const record = await user.getRecord();
    saveUser(record);
    const response = await request(app)
      .get(`/user/${user.output.id}`);
    expect(response.body.password).toBeUndefined();
    expect(response.body.digest).toBeUndefined();
    expect(response.body.salt).toBeUndefined();
  });
});
