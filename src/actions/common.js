import * as actionTypes from './types';

export function someActionCreator(payload) {
    return {
        type: actionTypes.SOME_ACTION_TYPE,
        payload
    };
}

export function login(user) {
  return {
    type: actionTypes.LOGIN_ACTION_TYPE,
    user
  };
}

export function logout() {
  return {
    type: actionTypes.LOGOUT_ACTION_TYPE,
  };
}
