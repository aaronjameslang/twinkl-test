import { z } from 'zod';
import { Password } from './Password';
import { UserId } from './UserId';
import { UserType } from './UserType';

export const UserWithoutId = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: Password,
  type: UserType,
});

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type UserWithoutId = z.infer<typeof UserWithoutId>;

export type User = UserWithoutId & { id: UserId };
