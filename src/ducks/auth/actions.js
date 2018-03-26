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
    }
};

export default actions;
