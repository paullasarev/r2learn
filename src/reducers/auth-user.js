import {assertType} from '../utils/assert';

import * as actionTypes from '../actions/types';
import {AuthUser} from '../entities/auth-user';
import {User} from '../entities/user';

let initialState = new AuthUser('user');
initialState.isLogged = true;

export default function authUserReducer(state = initialState, action) {
  console.log('authUserReducer', action)
  switch (action.type) {
    case actionTypes.AUTH_LOGOUT: {
      return new AuthUser();
    }
    case actionTypes.AUTH_LOGIN: {
      let auth = new AuthUser();
      let user = action.payload;
      assertType(User, user);
      auth.name = user.name;
      auth.password = user.password;
      auth.isLogged = true;
      if (user.name === 'e') {
        auth.isLogged = false;
        auth.error = new Error('wrong credentials');
      }
      return auth;
    }
    default:
      return state;
  }
}
