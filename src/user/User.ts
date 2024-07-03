import { z } from 'zod';
import { Password } from './Password';
import { UserId } from './UserId';
import { UserType } from './UserType';

export const UserWithoutId = z.object({
  name: z.string().min(1),
  /**
   * This date validation is not perfect, but honestly we shouldn't be
   * trusting created dates from the front end anyway, we can fill this
   * backend, same as the ID. TODO talk to stakeholders about why this
   * is a requirement.
   */
  created: z.string().transform((x) => new Date(x).toISOString()),
  email: z.string().email(),
  password: Password,
  type: UserType,
});

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type UserWithoutId = z.infer<typeof UserWithoutId>;

export type User = UserWithoutId & { id: UserId };
