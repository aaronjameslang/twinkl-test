import { randomUUID } from 'crypto';
import { UserInput } from './User';
import { hashPassword } from './hashPassword';

export async function createUserRecord(user: UserInput) {
  const id = randomUUID();
  const { digest, salt } = await hashPassword(user.password);
  return {
    ...user,
    id,
    digest,
    salt,
    password: undefined,
  };
}
