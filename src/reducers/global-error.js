import * as actionTypes from '../actions/types';

let initialState = {
  error: null,
};

export default function globalErrorReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.APP_SET_ERROR: {
      console.log('globalErrorReducer', action)
      return {
        error: action.payload,
      }
    }
    default:
      return state;
  }
}
