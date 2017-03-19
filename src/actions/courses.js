import { createAction } from 'redux-actions';
import * as types from './types';

import { assertType } from '../utils/assert';
import { Course } from '../entities/course';

export const create = createAction(types.COURSES_CREATE, assertType.bind(null, Course));
export const read = createAction(types.COURSES_READ, assertType.bind(null, /*filter*/'string'));
export const update = createAction(types.COURSES_UPDATE, assertType.bind(null, /*id*/'string'));
export const remove = createAction(types.COURSES_REMOVE, assertType.bind(null, /*id*/'string'));
