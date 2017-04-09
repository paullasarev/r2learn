import { createAction } from 'redux-actions';
import * as types from './types';

import { assertType } from '../../utils/assert';
import { Course } from '../../entities/course';
import { Api } from '../../api/mock';
import { setError } from './app';

const api = new Api();

export const create = createAction(types.COURSES_CREATE, assertType.bind(null, Course));
export const update = createAction(types.COURSES_UPDATE, assertType.bind(null, /*id*/'string'));
export const remove = createAction(types.COURSES_REMOVE, assertType.bind(null, /*id*/'string'));

export const readStart = createAction(types.COURSES_READ_START);
export const readEnd = createAction(types.COURSES_READ_END, assertType.bind(null, Array));
export const read = function(filter) {
  return function(dispatch, getState) {
    dispatch(readStart());

    api.courses
      .list(filter)
      .then((data)=>{
        dispatch(readEnd(data));
      })
      .catch((error)=>{
        dispatch(readEnd(error));
      })
  }
}

export const getStart = createAction(types.COURSES_GET_START);
export const getEnd = createAction(types.COURSES_GET_END, assertType.bind(null, Course));
// export const getError = createAction(types.COURSES_GET_ERROR, assertType.bind(null, Error));
export const get = function(id) {
  return function(dispatch, getState, db) {
    // let data = db(getState)
    //   .select('courses')
    //   .get();
    // console.log('get', data)

    dispatch(getStart());

    api.courses
      .get(id)
      .then((data)=>{
        dispatch(getEnd(data));
      })
      .catch((error)=>{
        dispatch(setError(error));
        dispatch(getEnd(error));
      })
  }
}


