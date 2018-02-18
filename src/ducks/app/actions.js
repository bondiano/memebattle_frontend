import types from './types';

const actions = {
    logout() {
        return {
            type: types.LOGOUT
        };
    }
};

export default actions;
