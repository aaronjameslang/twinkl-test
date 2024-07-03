import { fakeUser } from './fakeUser';
import { hashPassword, verifyPassword } from './hashPassword';

describe('hashPassword', () => {
  it('should hash a password', async () => {
    const user = fakeUser();
    const result = await hashPassword(user.input.password);
    expect(typeof result.digest).toBe('string');
    expect(result.digest).toHaveLength(128);
    expect(typeof result.salt).toBe('string');
    expect(result.salt).toHaveLength(32);
  });
});

describe('verifyPassword', () => {
  it('should verify a good password', async () => {
    const user = fakeUser();
    const { digest, salt } = await hashPassword(user.input.password);
    const result = await verifyPassword(user.input.password, salt, digest);
    expect(result).toBe(true);
  });
  it('should not verify a bad password', async () => {
    const user = fakeUser();
    const { digest, salt } = await hashPassword(user.input.password);
    const result = await verifyPassword('1nc0rrect', salt, digest);
    expect(result).toBe(false);
  });
});
