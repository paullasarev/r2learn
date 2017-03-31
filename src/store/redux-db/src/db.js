import { compose as reduxCompose } from 'redux';

const REDUX_DB_ACTION = "REDUX_DB_ACTION";

export class Db {

  constructor() {
  }

  reducer(state, action) {
    return state;
  }

  compose(reducer) {
    return reduxCompose(this.reducer.bind(this), reducer);
  }

  select() {

  }
}
