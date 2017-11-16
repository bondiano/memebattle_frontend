import { put, call, take, fork, takeEvery } from 'redux-saga/effects';
import services from './services';
import actions from './actions';
import types from './types';

function* registerSaga(action) {
    try{
        const data = yield call(services.registerUser, action.userData);
        yield put(actions.registerSuccess(data));
    } catch (error){
        yield put(actions.registerError(error));
    }
}

function* loginSaga(action) {
    try{
        const data = yield call(services.loginUser, action.userData);
        yield put(actions.loginSuccess(data));
        
        yield window.localStorage.setItem('token_access', data.token_access);
        yield window.localStorage.setItem('token_refresh', data.token_refresh);
        yield window.localStorage.setItem('username', data.username);
        yield window.localStorage.setItem('permissions', data.permissions);
        yield window.localStorage.setItem('id', data._id);
    } catch (error){
        yield put(actions.loginError(error));
    }
}

export default function* userRootSaga() {
    yield takeEvery(types.REGISTER_REQUEST, registerSaga);
    yield takeEvery(types.LOGIN_REQUEST, loginSaga);
};
