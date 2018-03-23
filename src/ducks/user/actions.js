import types from './types';

const actions = {
    registerRequest(userData) {
        return {
            type: types.REGISTER_REQUEST,
            userData
        };
    },

    registerSuccess(data) {
        return {
            type: types.REGISTER_SUCCESS,
            data
        };
    },

    registerError(error) {
        return {
            type: types.REGISTER_ERROR,
            error
        };
    },

    loginRequest(userData) {
        return {
            type: types.LOGIN_REQUEST,
            userData
        };
    },

    loginSuccess(data) {
        return {
            type: types.LOGIN_SUCCESS,
            data
        };
    },

    loginError(error) {
        return {
            type: types.LOGIN_ERROR,
            error
        };
    },

    checkLoginRequest(userData) {
        return {
            type: types.LOGIN_CHECK_REQUEST,
            userData
        };
    },

    checkLoginSuccess(data) {
        return {
            type: types.LOGIN_CHECK_SUCCESS,
            data
        };
    },

    checkLoginError(error) {
        return {
            type: types.LOGIN_CHECK_ERROR,
            error
        };
    }
};

export default actions;
