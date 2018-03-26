import types from './types';

const actions = {
    changeRoute(path) {
        return {
            type: types.CHANGE_ROUTE,
            path
        };
    }
};

export default actions;
