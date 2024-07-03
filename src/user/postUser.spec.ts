import request from 'supertest';
import { testServer } from '../testServer';
import { fakeUser } from './User.spec';
import { loadUser } from './loadUser';

describe('POST /user', () => {
  it('should return 201', async () => {
    await request(testServer)
      .post('/user')
      .send(fakeUser())
      .expect(201);
  });
  it('should return user ID', async () => {
    const response = await request(testServer)
      .post('/user')
      .send(fakeUser());
    const { id } = response.body;
    expect(typeof id).toBe('string');
    expect(id).toHaveLength(36);
  });
  it('should save user', async () => {
    const expected = fakeUser();
    const response = await request(testServer)
      .post('/user')
      .send(expected);
    const { id } = response.body;
    const actual = loadUser(id);
    expect(actual).toEqual({ ...expected, id });
  });
});
