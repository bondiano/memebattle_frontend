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

    loginSuccess(userData) {
        return {
            type: types.LOGIN_SUCCESS,
            user: {
                userData: userData
            }
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
