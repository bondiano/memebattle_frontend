import { fork, all } from 'redux-saga/effects';

import { appRootSaga } from '@/ducks/app';
import { userRootSaga } from '@/ducks/user';
import { gameRootSaga } from '@/ducks/game';


export default function* rootSaga() {
    yield all([
        fork(appRootSaga),
        fork(userRootSaga),
        fork(gameRootSaga),
    ]);
}
