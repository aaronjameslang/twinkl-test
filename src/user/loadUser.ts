import { existsSync, readFileSync } from 'fs';
import { User } from './User';

export function loadUser(id: string): User | null {
  const filename = `./data/users/${id}.json`;
  if (!existsSync(filename)) return null;
  const json = readFileSync(filename, 'utf-8');
  return JSON.parse(json);
}
