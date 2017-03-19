import { createAction } from 'redux-actions';
import * as types from './types';

import { assertType } from '../utils/assert';
import { Course } from '../entities/course';
import { Api } from '../api/mock';
import { setError } from './app';

const api = new Api();

export const create = createAction(types.COURSES_CREATE, assertType.bind(null, Course));
export const update = createAction(types.COURSES_UPDATE, assertType.bind(null, /*id*/'string'));
export const remove = createAction(types.COURSES_REMOVE, assertType.bind(null, /*id*/'string'));

export const readStart = createAction(types.COURSES_READ);
export const readSuccess = createAction(types.COURSES_READ_SUCCESS, assertType.bind(null, Array));
export const read = function(filter) {
  return function(dispatch, getState) {
    dispatch(readStart());

    api.courses
      .list(filter)
      .then((data)=>{
        dispatch(readSuccess(data));
      })
  }
}

export const getStart = createAction(types.COURSES_GET);
export const getSuccess = createAction(types.COURSES_GET_SUCCESS, assertType.bind(null, Course));
export const getError = createAction(types.COURSES_GET_ERROR, assertType.bind(null, Error));
export const get = function(id) {
  return function(dispatch, getState) {
    dispatch(getStart());

    api.courses
      .get(id)
      .then((data)=>{
        dispatch(getSuccess(data));
      })
      .catch((error)=>{
        dispatch(setError(error));
        dispatch(getError(error));
      })
  }
}


