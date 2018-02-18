import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, routerReducer } from 'react-router-redux';

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import {
    ACTIONS_TO_SEND_PREFIX,
    ACTIONS_FROM_SERVER_PREFIX
} from '../constants';
const { BASE_SOCKET_API_URL } = process.env;

const socket = io(BASE_SOCKET_API_URL);
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
const reduxRouterMiddleware = routerMiddleware(history);

const initialState = {};

/**
 * If action start with server prefix => dispatch this action.
 * Else if action start with client prefix => emit action to server
 *
 * @param action
 * @param emit
 * @param next
 */
function optimisticExecute(action, emit, next) {
    /**
     * Return prefix (e.g. '@@notification/')
     *
     * @param {string} type
     * @returns {string} prefix
     */
    const getPrefix = type => type.split('/')[0] + '/';
    console.log(action);
    switch (getPrefix(action.type)) {
        case ACTIONS_FROM_SERVER_PREFIX:
            next(action);
            return;
        case ACTIONS_TO_SEND_PREFIX: {
            emit(action.type, action);
            return;
        }
        default:
            next(action);
    }
}

const socketIoMiddleware = createSocketIoMiddleware(socket,
    [ACTIONS_TO_SEND_PREFIX, ACTIONS_FROM_SERVER_PREFIX],
    {execute: optimisticExecute});

const composeEnhancers = composeWithDevTools({
    actionsBlacklist: [
        /**
         * Development only
         * Add your actions you need to ignore
         * Don't forget to remove them before merge
         */
    ]
});

const middleware = [
    reduxRouterMiddleware,
    sagaMiddleware,
    socketIoMiddleware
];

const store = createStore(
    combineReducers({
        ...rootReducer,
        routing: routerReducer
    }),
    initialState,
    composeEnhancers(
        applyMiddleware(
            ...middleware
        )
    )
);

sagaMiddleware.run(rootSaga);

export default store;
