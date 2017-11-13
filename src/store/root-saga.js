import { fork, all } from 'redux-saga/effects';

import { appSagas } from '@/ducks/app';
import { userSagas } from '@/ducks/user';

export default function* rootSaga() {
    yield all([
        fork(appSagas),
        fork(userSagas),
    ]);
}
