import * as actionTypes from './types';

export function login(payload) {
  return {
    type: actionTypes.AUTH_LOGIN,
    payload
  };
}

export function logout(payload) {
  return {
    type: actionTypes.AUTH_LOGOUT,
    payload
  };
}

