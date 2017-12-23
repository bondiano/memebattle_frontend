import { put, call, takeEvery } from 'redux-saga/effects';
import services from './services';
import actions from './actions';
import types from './types';
import localStorage from '../../helpers/localstorage'

function* getLidersSaga(action) {
    try {
        const data = yield call(services.getLiders, action.userData);
        yield localStorage('set', 'memcoin')(data.userRating.coins);
        yield put(actions.getLidersSuccess(data));
    } catch (error) {
        yield put(actions.getLidersError(error));
    }
}

export default function* gameRootSaga() {
    yield takeEvery(types.LIDERLIST_REQUEST, getLidersSaga);
};
