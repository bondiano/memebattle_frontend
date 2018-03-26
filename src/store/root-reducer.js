import {combineReducers} from 'redux';
import { appReducer } from 'ducks/app';
import { authReducer } from 'ducks/auth';
import { userReducer } from 'ducks/user';
import { rushReducer } from 'ducks/games/rush';
import { routerReducer } from 'ducks/router';

export default combineReducers({
    app: appReducer,
    auth: authReducer,
    user: userReducer,
    games: combineReducers({
        rush: rushReducer
    }),
    routing: routerReducer
});
