import { fork, all } from 'redux-saga/effects';

import { appSagas } from '@/ducks/app';
import { userRootSaga } from '@/ducks/user';

export default function* rootSaga() {
    yield all([
        fork(appSagas),
        fork(userRootSaga),
    ]);
}
