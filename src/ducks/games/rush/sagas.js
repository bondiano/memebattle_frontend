import { put, call, takeLatest, all } from 'redux-saga/effects';
import services from './services';
import actions from './actions';
import types from './types';

function* getLeadersSaga(action) {
    try {
        const data = yield call(services.getLeaders, action.userData);
        yield put(actions.getLidersSuccess(data));
    } catch (error) {
        yield put(actions.getLidersError(error));
    }
}

export default function* rushRootSaga() {
    yield all([
        yield takeLatest(types.LIDERLIST_REQUEST, getLeadersSaga)
    ]);
}
