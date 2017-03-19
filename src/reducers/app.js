import * as actionTypes from '../actions/types';

let initialState = {
  title: "r2",
  error: null
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.APP_SET_TITLE: {
      return {
        title: action.payload,
      }
    }
    case actionTypes.APP_SET_ERROR: {
      return {
        error: action.payload,
      }
    }
    default:
      return state;
  }
}
