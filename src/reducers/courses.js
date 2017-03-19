import { assertType } from '../utils/assert';

import * as actionTypes from '../actions/types';
import { Course } from '../entities/course';

// let data = [
//   new Course('1', 'javascript', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fuga tenetur illum, reprehenderit possimus architecto optio maxime dolore iure, nobis, provident. Repellat quod cupiditate doloremque esse natus vero delectus dolores!', 600),
//   new Course('2', 'CSS', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora repellendus deleniti temporibus nesciunt culpa recusandae excepturi mollitia minima, provident commodi maxime illum voluptates architecto et nobis corrupti. Optio esse, quod.', 300)
// ];

const emptyCourse = new Course();
let initialState = {
  isLoading: false,
  course: emptyCourse,
  items: [],
}

export default function courses(state = initialState, action) {
  switch (action.type) {
    case actionTypes.COURSES_CREATE: {
      return state;
    }
    case actionTypes.COURSES_READ: {
      return {
        isLoading: true,
        items: [...state.items],
        course: state.course,
      };
    }
    case actionTypes.COURSES_READ_SUCCESS: {
      return {
        isLoading: false,
        items: action.payload,
        course: state.course,
      };
    }
    case actionTypes.COURSES_GET: {
      return {
        isLoading: true,
        items: [...state.items],
        course: emptyCourse,
      };
    }
    case actionTypes.COURSES_GET_SUCCESS: {
      return {
        isLoading: false,
        items: [...state.items],
        course: action.payload,
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
