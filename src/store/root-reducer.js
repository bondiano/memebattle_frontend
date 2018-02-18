import { appReducer } from 'ducks/app';
import { userReducer } from 'ducks/user';
import { gameReducer } from 'ducks/game';

export default {
    app: appReducer,
    user: userReducer,
    game: gameReducer
};
