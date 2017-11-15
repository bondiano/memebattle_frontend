import types from './types';

const actions = {
    registerRequest(userData) {
        return {
            type: types.REGISTER_REQUEST,
            userData,
        };
    },
    registerSuccess(token) {
        return {
            type: types.REGISTER_SUCCESS,
            token,
        };
    },
    registerError(error) {
        return {
            type: types.REGISTER_ERROR,
            error,
        };
    },
    loginRequest(userData) {
        return {
            type: types.LOGIN_REQUEST,
            userData,
        };
    },
    loginSuccess(token) {
        return {
            type: types.LOGIN_SUCCESS,
            token,
        };
    },
    loginError(error) {
        return {
            type: types.LOGIN_ERROR,
            error,
        };
    },
};

export default actions;