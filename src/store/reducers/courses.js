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
  [actionTypes.COURSES_READ]: (state, action) => ({
    ...state,
    isLoading: true,
    error: null,
  }),
  [actionTypes.COURSES_READ_SUCCESS]: (state, {payload: items}) => ({
    ...state,
    isLoading: false,
    items: items,
  }),
  [actionTypes.COURSES_GET]: (state, action) => ({
    ...state,
    isLoading: true,
    course: emptyCourse,
    error: null,
  }),
  [actionTypes.COURSES_GET_SUCCESS]: (state, {payload: course}) => ({
    ...state,
    isLoading: false,
    course: course,
  }),
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

