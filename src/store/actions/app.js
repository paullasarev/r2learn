import { createAction } from 'redux-actions';
import * as types from './types';
import { assertType } from '../../utils/assert';

export const setError = createAction(types.APP_SET_ERROR, assertType.bind(null, Error));
export const setTitle = createAction(types.APP_SET_TITLE);
