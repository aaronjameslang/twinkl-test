import { mkdirSync, writeFileSync } from 'fs';
import { User } from './User';

export function saveUser(user: User) {
  // TODO replace with dynamoDB
  mkdirSync('./data/users/', { recursive: true });
  const json = JSON.stringify(user);
  writeFileSync(`./data/users/${user.id}.json`, json);
}
