import { z } from 'zod';
import { Password } from './Password';
import { UserId } from './UserId';
import { UserType } from './UserType';

export const UserInput = z.object({
  /**
   * This date validation is not perfect, but honestly we shouldn't be
   * trusting created dates from the front end anyway, we can fill this
   * in backend, same as the ID. TODO talk to stakeholders about why
   * this is a requirement.
   */
  created: z.string().min(1).transform((x) => new Date(x).toISOString()),
  email: z.string().email(),
  name: z.string().min(1),
  password: Password,
  type: UserType,
});

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type UserInput = z.infer<typeof UserInput>;

export type UserOutput =
 Omit<UserInput, 'password'> & {
   id: UserId;
 };

export type UserRecord =
 UserOutput & {
   digest: string;
   salt: string;
 };

/** @deprecated */
export const UserWithoutId = UserInput;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type UserWithoutId = z.infer<typeof UserWithoutId>;

/** @deprecated */
export type User = UserWithoutId & { id: UserId };
