import { faker } from '@faker-js/faker';
import { UserWithoutId } from './User';

export function fakeUser(): UserWithoutId {
  return {
    created: faker.date.recent().toISOString(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    password: faker.internet.password(),
    type: faker.helpers.arrayElement([
      'parent',
      'student',
      'teacher',
      'tutor',
    ]),
  };
}

describe('UserWithoutId', () => {
  it('should parse valid user', async () => {
    const expected = fakeUser();
    const actual = UserWithoutId.parse(expected);
    expect(actual).toEqual(expected);
  });
});
