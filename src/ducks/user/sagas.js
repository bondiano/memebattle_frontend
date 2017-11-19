import { put, call, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import services from './services';
import actions from './actions';
import types from './types';
import { routes } from '@/constants';

/**
 * @param {Object} data
 * @param {String} data.token_access
 * @param {String} data.token_refresh
 * @param {String} data.username
 * @param {String} data.permissions
 * @param {String} data._id
 */
const setupStorage = (data) => {
    window.localStorage.setItem('token_access', data.token_access);
    window.localStorage.setItem('token_refresh', data.token_refresh);
    window.localStorage.setItem('username', data.username);
    window.localStorage.setItem('permissions', data.permissions);
    window.localStorage.setItem('id', data._id);
};

function* registerSaga(action) {
    try {
        const data = yield call(services.registerUser, action.userData);
        yield put(actions.registerSuccess(data));
        yield put(push(routes.LOGIN))
    } catch (error) {
        yield put(actions.registerError(error));
    }
}

function* loginSaga(action) {
    try {
        const data = yield call(services.loginUser, action.userData);
        yield put(actions.loginSuccess(data));
        yield setupStorage(data);
        yield put(push(routes.HOME))
    } catch (error) {
        yield put(actions.loginError(error));
    }
}

export default function* userRootSaga() {
    yield takeEvery(types.REGISTER_REQUEST, registerSaga);
    yield takeEvery(types.LOGIN_REQUEST, loginSaga);
};
