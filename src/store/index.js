import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, routerReducer } from 'react-router-redux';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
const reduxRouterMiddleware = routerMiddleware(history);

const initialState = {};

const middleware = [
    reduxRouterMiddleware,
    sagaMiddleware,
];

const store = createStore(
    combineReducers({
        ...rootReducer,
        routing: routerReducer,
    }),
    initialState,
    composeWithDevTools(
        applyMiddleware(
            ...middleware
        )
    )
);

sagaMiddleware.run(rootSaga);

export default store;
