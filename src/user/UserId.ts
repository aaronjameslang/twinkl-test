import { z } from 'zod';

export const UserId = z.string().uuid();

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type UserId = z.infer<typeof UserId>;
