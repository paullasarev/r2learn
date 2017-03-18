import {combineReducers} from 'redux';

import app from './app';
import authUser from './auth-user';
import globalError from './global-error';

const reducers = {
  app,
  authUser,
  globalError,
};

export default combineReducers(reducers);
