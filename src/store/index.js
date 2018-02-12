import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { API_URL } from '../constants'

import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, routerReducer } from 'react-router-redux';

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
let socket = io(API_URL);
let socketIoMiddleware = createSocketIoMiddleware(socket, "@@ws/");

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
const reduxRouterMiddleware = routerMiddleware(history);

const initialState = {};

const middleware = [
    reduxRouterMiddleware,
    sagaMiddleware,
    socketIoMiddleware,
];

const store = createStore(
    combineReducers({
        ...rootReducer,
        routing: routerReducer
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
