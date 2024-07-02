import request from 'supertest';
import { testServer } from '../testServer';

describe('GET /user', () => {
  it('should return 404', async () => {
    await request(testServer)
      .get('/user/invalid-id')
      .expect(404);
  });
});
