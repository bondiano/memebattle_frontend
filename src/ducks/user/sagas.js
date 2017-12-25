import { put, call, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import services from './services';
import actions from './actions';
import types from './types';
import { routes } from '@/constants';
import localStorage from '../../helpers/localstorage';
import ym from 'react-yandex-metrika';

/**
 * @param {Object} data
 * @param {String} data.token_access
 * @param {String} data.token_refresh
 * @param {String} data.username
 * @param {String} data.permissions
 * @param {String} data._id
 */
const setupStorage = (data) => {
    localStorage('set', 'id')(data._id);
    localStorage('set', 'username')(data.username);
    localStorage('set', 'permissions')(data.permissions);
    localStorage('set', 'memcoin')(data.coins);
    localStorage('set', 'token_access')(data.token_access);
    localStorage('set', 'token_refresh')(data.token_refresh);
};

function* registerSaga(action) {
    try {
        const data = yield call(services.registerUser, action.userData);
        yield put(actions.registerSuccess(data));
        yield localStorage('clear')();          
        yield ym('hit', {
            title: 'Регистрация',
            url: '/register'
         });      
        yield put(push(routes.LOGIN));
    } catch (error) {
        yield localStorage('clear')();                
        yield put(actions.registerError(error));
    }
}

function* loginSaga(action) {
    try {
        const data = yield call(services.loginUser, action.userData);
        yield put(actions.loginSuccess(data));
        yield localStorage('clear')();        
        yield setupStorage(data);
        yield ym('hit', {
            title: 'Вход',
            url: '/login'
         });     
        yield put(push(routes.HOME));
    } catch (error) {
        yield localStorage('clear')();                
        yield put(actions.loginError(error));
    }
}

function* checkLoginSaga(action) {
    try {
        const data = yield call(services.checkLogin, action.userData);
        yield put(actions.checkLoginSuccess(data));
    } catch (error) {
        yield put(actions.checkLoginError(error));
    }
}

export default function* userRootSaga() {
    yield takeEvery(types.REGISTER_REQUEST, registerSaga);
    yield takeEvery(types.LOGIN_REQUEST, loginSaga);
    yield takeEvery(types.LOGIN_CHECK_REQUEST, checkLoginSaga);
};
