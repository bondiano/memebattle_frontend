import { put, all, takeEvery } from 'redux-saga/effects';
import actions from './actions';
import types from './types';
import services from './services';
import {localStorage} from 'helpers';


function* registerSaga({userData}) {
    try {
        yield services.registerUser(userData);
    } catch (error) {
        yield put(actions.registerError(error));
    }
}

function* loginSaga({userData}) {
    try {
        const response = yield services.loginUser(userData);
        if (response.sucsess) {
            localStorage.setItem('token', response.data.token);
        }
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
