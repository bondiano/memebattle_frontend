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
    loginSuccess(token) {
        return {
            type: types.LOGIN_SUCCESS,
            token,
        };
    },
    loginError(errors) {
        return {
            type: types.LOGIN_ERROR,
            errors,
        };
    },
};

export default actions;