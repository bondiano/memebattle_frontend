import { put, all, takeEvery } from 'redux-saga/effects';
import actions from './actions';
import types from './types';
import localStorage from '../../helpers/localstorage';

function* registerSaga() {
    try {
        //
    } catch (error) {
        yield localStorage('clear')();
        yield put(actions.registerError(error));
    }
}

function* loginSaga() {
    try {
        //
    } catch (error) {
        yield put(actions.loginError(error));
    }
}

export default function* userRootSaga() {
    yield all([
        takeEvery(types.REGISTER_REQUEST, registerSaga),
        takeEvery(types.LOGIN_REQUEST, loginSaga)
    ]);
}
