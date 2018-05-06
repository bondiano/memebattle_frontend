import { fork, all } from 'redux-saga/effects';
import { appRootSaga } from '@/ducks/app';
import { authRootSaga } from '@/ducks/auth';
import { userRootSaga } from '@/ducks/user';
import { rushRootSaga } from '@/ducks/games/rush';
import { routerRootSaga } from '@/ducks/router';

export default function* rootSaga() {
    yield all([
        fork(appRootSaga),
        fork(authRootSaga),
        fork(userRootSaga),
        fork(rushRootSaga),
        fork(routerRootSaga)
    ]);
}
