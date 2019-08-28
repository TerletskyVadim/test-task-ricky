import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import createRootReducer from './reducers';
import sagas from './sagas';

export default function configureStore(preloadedState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(),
    preloadedState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(sagas);

  return store;
}
