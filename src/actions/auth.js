import { createAction } from 'redux-actions';
import * as types from './types';

import { assertType } from '../utils/assert';
import { User } from '../entities/user';

export const login = createAction(types.AUTH_LOGIN, assertType.bind(null, User));
export const logout = createAction(types.AUTH_LOGOUT);
