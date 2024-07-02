import { z } from 'zod';

export const Password = z
  .string()
  .max(64)
  .min(8)
  .regex(/[0-9]/, 'Password must contain a number')
  .regex(/[A-Z]/, 'Password must contain an uppercase letter')
  .regex(/[a-z]/, 'Password must contain a lowercase letter');

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Password = z.infer<typeof Password>;
