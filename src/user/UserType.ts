import { z } from 'zod';

export const UserType = z.enum([
  'parent',
  'student',
  'teacher',
  'tutor',
]);

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type UserType = z.infer<typeof UserType>;
