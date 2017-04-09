import { assertType } from '../../utils/assert';
import { handleActions } from 'redux-actions';

import * as actionTypes from '../actions/types';
import { Course } from '../../entities/course';

const emptyCourse = new Course();
let initialState = {
  isLoading: false,
  course: emptyCourse,
  items: [],
  error: null,
}

export default handleActions({
  [actionTypes.COURSES_CREATE]: (state, action) => ({
    ...state
  }),
  [actionTypes.COURSES_READ_START]: (state, action) => (
    {...state, isLoading: true, error: null}
  ),
  [actionTypes.COURSES_READ_END]: {
    next(state, {payload: items}) {
      return {...state, isLoading: false, items: items}
    },
    throw(error) {
      return {...state, isLoading: false, error: error}
    }
  },
  [actionTypes.COURSES_GET_START]: (state, action) => (
    {...state, isLoading: true, course: emptyCourse, error: null}
  ),
  [actionTypes.COURSES_GET_END]: {
    next(state, {payload: course}) {
      return {...state, isLoading: false, course: course}
    },
    throw(error) {
      return {...state, isLoading: false, error: error}
    }
  },
  [actionTypes.COURSES_UPDATE]: (state, action) => ({
    ...state,
  }),
  [actionTypes.COURSES_CREATE]: (state, action) => ({
    ...state,
  }),
  [actionTypes.COURSES_REMOVE]: (state, action) => ({
    ...state,
  }),
}, initialState);

