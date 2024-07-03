// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import { randomUUID } from 'crypto';
import { UserInput, UserOutput, UserRecord } from './User';
import { hashPassword } from './hashPassword';

interface UserFake {
  input: UserInput
  output: UserOutput
  getRecord: () => Promise<UserRecord>
}

export function fakeUser(): UserFake {
  const id = randomUUID();
  const input: UserInput = {
    created: faker.date.recent().toISOString(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    password: faker.internet.password() + 1,
    type: faker.helpers.arrayElement([
      'parent',
      'student',
      'teacher',
      'tutor',
    ]),
  };
  const output = { ...input, id, password: undefined };
  async function getRecord() {
    const { digest, salt } = await hashPassword(input.password);
    return { ...output, digest, salt };
  }
  return {
    input,
    output,
    getRecord,
  };
}
