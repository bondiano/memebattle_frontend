import types from './types';

const initialState = {
    errors: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGOUT:
        default:
            return state;
    }
};
