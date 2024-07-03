import { createUserRecord } from './createUserRecord';
import { fakeUser } from './fakeUser';
import { verifyPassword } from './hashPassword';

describe('createUserRecord', () => {
  it('should hash the password', async () => {
    const user = fakeUser();
    const record = await createUserRecord(user.input);
    expect(record.digest).toBeDefined();
    expect(record.salt).toBeDefined();
    expect(record.id).toBeDefined();
    const verified = await verifyPassword(
      user.input.password,
      record.salt,
      record.digest,
    );
    expect(verified).toBe(true);
  });
});
