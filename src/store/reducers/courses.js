import { assertType } from '../../utils/assert';
import {combineReducers} from 'redux';

import * as actionTypes from '../actions/types';
import { Course } from '../../entities/course';

const emptyCourse = new Course();
let initialState = {
  isLoading: false,
  course: emptyCourse,
  items: [],
  error: null,
}

function itemsReducer(state = [], action)
{
  
}

export default function courses(state = initialState, action) {
  switch (action.type) {
    case actionTypes.COURSES_CREATE: {
      return state;
    }
    case actionTypes.COURSES_READ: {
      return { ...state,
        isLoading: true,
        error: null,
      };
    }
    case actionTypes.COURSES_READ_SUCCESS: {
      return {...state,
        isLoading: false,
        items: action.payload,
      };
    }
    case actionTypes.COURSES_GET: {
      return {...state,
        isLoading: true,
        course: emptyCourse,
        error: null,
      };
    }
    case actionTypes.COURSES_GET_SUCCESS: {
      return {...state,
        isLoading: false,
        course: action.payload,
      };
    }
    case actionTypes.COURSES_GET_ERROR: {
      return {...state,
        isLoading: false,
        course: emptyCourse,
        error: action.payload,
      };
    }
    case actionTypes.COURSES_UPDATE: {
      return state;
    }
    case actionTypes.COURSES_REMOVE: {
      return state;
    }
    default:
      return state;
  }
}
