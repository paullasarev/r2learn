import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
// import logger from 'redux-logger';

import reducers from './reducers/reducers';

import { Db } from './redux-db/src/db';

let db = new Db();

export function configureStore(initialState = {}) {
  return createStore(
    db.compose(reducers),
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk.withExtraArgument(db),
        promise,
        // logger({diff:false})
      ),
    )
  );
}
