import { UserWithoutId } from './User';

export const VALID_TEST_USER = {
  name: 'Alice',
  email: 'alice@example.com',
  password: 'Password1',
  type: 'teacher',
};

describe('UserWithoutId', () => {
  it('should parse valid user', async () => {
    const user = UserWithoutId.parse(VALID_TEST_USER);
    expect(user).toEqual(VALID_TEST_USER);
  });
});
