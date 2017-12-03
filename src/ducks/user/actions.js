import types from './types';

const actions = {
    registerRequest(userData) {
        return {
            type: types.REGISTER_REQUEST,
            userData,
        };
    },
    registerSuccess(data) {
        return {
            type: types.REGISTER_SUCCESS,
            data,
        };
    },
    registerError(errors) {
        return {
            type: types.REGISTER_ERROR,
            errors,
        };
    },
    loginRequest(userData) {
        return {
            type: types.LOGIN_REQUEST,
            userData,
        };
    },
    loginSuccess(data) {
        return {
            type: types.LOGIN_SUCCESS,
            data,
        };
    },
    loginError(errors) {
        return {
            type: types.LOGIN_ERROR,
            errors,
        };
    },
    checkLoginRequest(userData) {
        return {
            type: types.LOGIN_CHECK_REQUEST,
            userData,
        };
    },
    checkLoginSuccess(data) {
        return {
            type: types.LOGIN_CHECK_SUCCESS,
            data,
        };
    },
    checkLoginError(error) {
        return {
            type: types.LOGIN_CHECK_ERROR,
            error,
        };
    },
};

export default actions;