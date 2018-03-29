import types from './types';
import {fromJS} from 'immutable';

const initialState = fromJS({
    isLoggedIn: false,
    error: null,
    isFetching: false
});

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
        case types.REGISTER_REQUEST:
            return state.set('isFetching', true);

        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            return state
                .set('isFetching', false)
                .set('isLoggedIn', true);

        case types.REGISTER_ERROR:
        case types.LOGIN_ERROR:
            return state
                .set('error', fromJS(action.error))
                .set('isFetching', false);

        case types.LOGOUT:
            return state.set('isLoggedIn', false);

        default:
            return state;
    }
};
