import { fork, all } from 'redux-saga/effects';

import { appSagas } from '@/ducks/app';

export default function* rootSaga() {
    yield all([
        fork(appSagas),
    ]);
}
