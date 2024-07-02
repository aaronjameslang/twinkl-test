import { UserType } from './UserType';

export interface User {
  email: string;
  id: string;
  name: string;
  password: string;
  type: UserType;
}
