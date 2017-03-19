import * as actionTypes from './types';

export function someActionCreator(payload) {
    return {
        type: actionTypes.SOME_ACTION_TYPE,
        payload
    };
}

export function setError(payload) {
  return {
    type: actionTypes.APP_SET_ERROR,
    payload
  };
}

export function setAppTitle(payload) {
  return {
    type: actionTypes.APP_SET_TITLE,
    payload
  };
}
