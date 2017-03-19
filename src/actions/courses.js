import { createAction } from 'redux-actions';
import * as types from './types';

import { assertType } from '../utils/assert';
import { Course } from '../entities/course';

export const create = createAction(types.COURSES_CREATE, assertType.bind(Course));
export const read = createAction(types.COURSES_READ, assertType.bind(/*filter*/'string'));
export const update = createAction(types.COURSES_UPDATE, assertType.bind(/*id*/'string'));
export const remove = createAction(types.COURSES_REMOVE, assertType.bind(/*id*/'string'));
