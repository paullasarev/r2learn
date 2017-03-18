import * as actionTypes from '../actions/types';

let initialState = {
  title: "r2",
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_APP_TITLE_ACTION_TYPE: {
      return {
        title: action.payload,
      }
    }
    default:
      return state;
  }
}
