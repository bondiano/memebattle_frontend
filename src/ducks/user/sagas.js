import { put, call, take, fork, takeEvery } from 'redux-saga/effects';
import services from './services';
import actions from './actions';
import types from './types'

function* registerSaga(action) {
    try{
        const data = yield call(services.registerUser, action.userData);
        yield put(actions.registerSuccess(data))
    } catch (error){
        yield put(actions.registerError(error))        
    }
};

export default function* appRootSaga() {
    takeEvery(types.REGISTER_REQUEST, registerSaga);
};
