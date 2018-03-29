import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { Map } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
const reduxRouterMiddleware = routerMiddleware(history);
const middleware = [
    reduxRouterMiddleware,
    sagaMiddleware
];

const initialState = Map();

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(
            ...middleware
        )
    )
);

sagaMiddleware.run(rootSaga, store.dispatch);

export default store;
