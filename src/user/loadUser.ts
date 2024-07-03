import { existsSync, readFileSync } from 'fs';
import { UserRecord } from './User';

export function loadUser(id: string): UserRecord | null {
  const filename = `./data/users/${id}.json`;
  if (!existsSync(filename)) return null;
  const json = readFileSync(filename, 'utf-8');
  return JSON.parse(json);
}
