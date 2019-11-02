import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleWare();

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);