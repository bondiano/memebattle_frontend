import types from './types';
import {fromJS} from 'immutable';

const initialState = fromJS({
    error: null
});

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGOUT:
        default:
            return state;
    }
};
