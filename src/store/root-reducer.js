import {combineReducers} from 'redux';
import { appReducer } from 'ducks/app';
import { userReducer } from 'ducks/user';
import { rushReducer } from 'ducks/games/rush';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    app: appReducer,
    user: userReducer,
    games: combineReducers({
        rush: rushReducer
    }),
    routing: routerReducer
});
