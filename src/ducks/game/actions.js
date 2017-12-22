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
    connectToGameClient(data) {
        return {
            type: types.CONNECT_TO_GAME_CLIENT,
            ...data,
        };
    },
    connectToGame(data) {
        return {
            type: types.CONNECT_TO_GAME_REQUEST,
            ...data,
        };
    },
    getMemesPair(data) {
        return {
            type: types.GET_MEM_PAIR_REQUEST,
            ...data,
        }
    },
    chooseMeme(data) {
        return {
            type: types.CHOOSE_MEM_REQUEST,
            ...data,
        }
    }
};

export default actions;