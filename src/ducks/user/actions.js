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
};

export default actions;