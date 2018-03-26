import types from './types';
import {put, takeLatest, all} from 'redux-saga/effects';
import {push} from 'react-router-redux';


/**
 * Push route to browser history
 *
 * @param {Object|string} route
 */
function* changeRouteSaga({route}) {
    yield put(push(route));
}

export default function* routerRootSaga() {
    yield all([
        yield takeLatest([types.CHANGE_ROUTE, types.CHANGE_ROUTE], changeRouteSaga)
    ]);
}
