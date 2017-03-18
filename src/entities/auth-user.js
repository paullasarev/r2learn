import {User} from './user';

export class AuthUser extends User {
  constructor() {
    super();
    this.isLogged = false;
    this.error = null;
  }
}
