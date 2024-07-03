import { mkdirSync, writeFileSync } from 'fs';
import { UserRecord } from './User';

export function saveUser(user: UserRecord) {
  // TODO replace with dynamoDB
  // TODO store password digest separately
  mkdirSync('./data/users/', { recursive: true });
  const json = JSON.stringify(user, null, 2);
  writeFileSync(`./data/users/${user.id}.json`, json);
}
