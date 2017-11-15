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
    } catch (error){
        yield put(actions.loginError(error));
    }
}

export default function* userRootSaga() {
    yield takeEvery(types.REGISTER_REQUEST, registerSaga);
    yield takeEvery(types.LOGIN_REQUEST, loginSaga);
};
