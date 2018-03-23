import {put, takeLatest, call, all, select} from 'redux-saga/effects';
import {push, LOCATION_CHANGE} from 'react-router-redux';
import queryString from 'query-string';
import {Routes} from 'constants.js';

const SAGA_FOR_ROUTE = {};

/**
 * Start some logic on route change
 *
 */
function* navigationSaga() {
    const
        /*
        Use selector because order of actions
        is not stable, but state data are always correct
         */
        {location} = yield select(selectors.selectLocation),
        saga = SAGA_FOR_ROUTE[location.get('pathname')],
        {isInitialized} = yield select(selectors.selectRouterStatus);

    if (saga && isInitialized) {
        yield call(saga, location);
    }
}

/**
 * Push route to browser history
 *
 * @param {Object|string} route
 */
function* changeRouteSaga({route}) {
    if (route.query) {
        route.search = `?${queryString.stringify(route.query)}`;
    }
    yield put(push(route));
}

export default function* routerRootSaga() {
    yield all([
        yield takeLatest([types.CHANGE_ROUTE, types.INIT_ROUTER], changeRouteSaga),
        yield takeLatest(LOCATION_CHANGE, navigationSaga)
    ]);
}
