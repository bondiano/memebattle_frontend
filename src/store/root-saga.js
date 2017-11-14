import { fork, all } from 'redux-saga/effects';

import { appSagas } from '@/ducks/app';
import { registerSaga } from '@/ducks/user';

export default function* rootSaga() {
    yield all([
        fork(appSagas),
        fork(registerSaga),
    ]);
}
