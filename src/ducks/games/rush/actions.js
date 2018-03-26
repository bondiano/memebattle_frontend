import types from './types';

const actions = {
    chooseMeme() {
        return {
            type: types.CHOOSE_MEM_REQUEST
        };
    },

    leaveFromGame() {
        return {
            type: types.LEAVE_FROM_GAME_REQUEST
        };
    }
};

export default actions;
