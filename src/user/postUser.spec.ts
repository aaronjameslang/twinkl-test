import request from 'supertest';
import { app } from '../app';
import { fakeUser } from './fakeUser';
import { loadUser } from './loadUser';

describe('POST /user', () => {
  it('should return 201', async () => {
    await request(app)
      .post('/user')
      .send(fakeUser().input)
      .expect(201);
  });
  it('should return user ID', async () => {
    const response = await request(app)
      .post('/user')
      .send(fakeUser().input);
    const { id } = response.body;
    expect(typeof id).toBe('string');
    expect(id).toHaveLength(36);
  });
  it('should save user', async () => {
    const { input } = fakeUser();
    const response = await request(app)
      .post('/user')
      .send(input);
    const { id } = response.body;
    const actualRecord = loadUser(id);
    const actualOutput = { ...actualRecord, digest: undefined, salt: undefined };
    const expectedOutput = { ...input, id, password: undefined };
    expect(actualOutput).toEqual(expectedOutput);
  });

  // --- Unhappy Paths ---
  Object.keys(fakeUser().input).forEach((key) => {
    ['', null, undefined].forEach((value) => {
      const user = fakeUser().input;
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
