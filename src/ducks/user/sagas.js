import { put, call, take, fork, takeEvery } from 'redux-saga/effects';
import services from './services';
import actions from './actions';
import types from './types';

function* registerSaga(action) {
    try{
        console.log('Reg saga');
        const data = yield call(services.registerUser, action.userData);
        yield put(actions.registerSuccess(data));
    } catch (error){
        yield put(actions.registerError(error));
    }
}

export default function* userRootSaga() {
    yield takeEvery(types.REGISTER_REQUEST, registerSaga);
};
