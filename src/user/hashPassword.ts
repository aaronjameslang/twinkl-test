import crypto from 'crypto';
import { Password } from './Password';

export interface HashResult {
  digest: string
  salt: string
}

export async function hashPassword(
  password: Password,
  salt = crypto.randomBytes(16).toString('hex'),
) {
  return new Promise<HashResult>((resolve, reject) => {
    // TODO bcrypt is stronger, investigate, but we probably shouldn't
    // be doing this ourselves, use a service like Auth0
    // TODO double check all these params with team, document
    crypto.pbkdf2(password, salt, 1000, 64, 'sha512', (err, derivedKey) => {
      if (err) reject(err);
      resolve({ salt, digest: derivedKey.toString('hex') });
    });
  });
}

export async function verifyPassword(
  password: Password,
  salt: string,
  digest: string,
) {
  const expected = { digest };
  const actual = await hashPassword(password, salt);
  return actual.digest === expected.digest;
}
