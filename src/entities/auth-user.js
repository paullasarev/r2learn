import {User} from './user';

export class AuthUser extends User {
  constructor(user, password) {
    super(user, password);
    this.isLogged = false;
    this.error = null;
  }
}
