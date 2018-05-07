import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import { Map } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';
import { socket } from '@/helpers';

export const history = createHistory();
const reduxRouterMiddleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const socketMiddleware = createSocketIoMiddleware(socket, '@@socket/');

const middleware = [
    reduxRouterMiddleware,
    sagaMiddleware,
    socketMiddleware
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
