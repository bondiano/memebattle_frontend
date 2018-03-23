import { fork, all } from 'redux-saga/effects';

import { appRootSaga } from 'ducks/app';
import { userRootSaga } from 'ducks/user';
import { rushRootSaga } from 'ducks/games/rush';


export default function* rootSaga() {
    yield all([
        fork(appRootSaga),
        fork(userRootSaga),
        fork(rushRootSaga)
    ]);
}
