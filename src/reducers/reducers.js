import {combineReducers} from 'redux';

import app from './app';
import authUser from './auth-user';
import courses from './courses';

const reducers = {
  app,
  authUser,
  courses,
};

export default combineReducers(reducers);
