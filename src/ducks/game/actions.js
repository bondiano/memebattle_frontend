import types from './types';

const actions = {
    getLidersRequest(userData) {
        return {
            type: types.LIDERLIST_REQUEST,
            userData,
        };
    },
    getLidersSuccess(data) {
        return {
            type: types.LIDERLIST_SUCCESS,
            data,
        };
    },
    getLidersError(error) {
        return {
            type: types.LIDERLIST_ERROR,
            error,
        };
    },
};

export default actions;