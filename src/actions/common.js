import * as actionTypes from './types';

export function someActionCreator(payload) {
    return {
        type: actionTypes.SOME_ACTION_TYPE,
        payload
    };
}

export function login(payload) {
  return {
    type: actionTypes.LOGIN_ACTION_TYPE,
    payload
  };
}

export function logout(payload) {
  return {
    type: actionTypes.LOGOUT_ACTION_TYPE,
    payload
  };
}

export function setError(payload) {
  return {
    type: actionTypes.SET_ERROR_ACTION_TYPE,
    payload
  };
}

export function setAppTitle(payload) {
  return {
    type: actionTypes.SET_APP_TITLE_ACTION_TYPE,
    payload
  };
}
