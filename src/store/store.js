import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
// import logger from 'redux-logger';

import reducers from './reducers/reducers';

export function configureStore(initialState = {}) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        promise,
        // logger({diff:false})
      ),
    )
  );
}
