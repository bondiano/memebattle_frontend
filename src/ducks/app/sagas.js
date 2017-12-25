import { put, call, takeEvery } from 'redux-saga/effects';
import services from './services';
import actions from './actions';
import types from './types';
import { routes } from '@/constants';
import { push } from 'react-router-redux';
import localStorage from '../../helpers/localstorage';
import ym from 'react-yandex-metrika';

function* logoutSaga(action) {
    try {
        yield localStorage('clear')();
        yield ym('hit', {
            title: 'Выход',
            url: '/logout'
         }); 
        yield put(push(routes.LOGIN));
    } catch (error) {
        yield put(console.log(error));
    }
}

export default function* appRootSaga() {
    yield takeEvery(types.LOGOUT, logoutSaga);
};
