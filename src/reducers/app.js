import * as actionTypes from '../actions/types';

let initialState = {
  title: "r2",
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.APP_SET_TITLE: {
      return {
        title: action.payload,
      }
    }
    default:
      return state;
  }
}
