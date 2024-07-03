import request from 'supertest';
import { app } from '../app';
import { fakeUser } from './User.spec';
import { loadUser } from './loadUser';

describe('POST /user', () => {
  it('should return 201', async () => {
    await request(app)
      .post('/user')
      .send(fakeUser())
      .expect(201);
  });
  it('should return user ID', async () => {
    const response = await request(app)
      .post('/user')
      .send(fakeUser());
    const { id } = response.body;
    expect(typeof id).toBe('string');
    expect(id).toHaveLength(36);
  });
  it('should save user', async () => {
    const expected = fakeUser();
    const response = await request(app)
      .post('/user')
      .send(expected);
    const { id } = response.body;
    const actual = loadUser(id);
    expect(actual).toEqual({ ...expected, id });
  });

  // --- Unhappy Paths ---
  Object.keys(fakeUser()).forEach((key) => {
    ['', null, undefined].forEach((value) => {
      const user = fakeUser();
      // @ts-expect-error
      user[key] = value;
      const description = `user.${key} = ${JSON.stringify(value)}`;
      it(`should return 422 for ${description}`, async () => {
        await request(app)
          .post('/user')
          .send(user)
          .expect(422);
      });
      it(`should return error details for ${description}`, async () => {
        const response = await request(app)
          .post('/user')
          .send(user);
        expect(response.body).toMatchSnapshot();
      });
    });
  });
});
