import types from './types';
import localstorage from '../../helpers/localstorage';

const initialState = {
    user: {
        _id: localstorage('get', 'id')(''),
        username: localstorage('get', 'username')(''),
        avatar: localstorage('get', 'avatar')(''),
        memcoin: localstorage('get', 'avatar')(0),
        permissions: localstorage('get', 'permissions')(''),
    },
    accessToken: localstorage('get', 'token_access')(''),
    refreshToken: localstorage('get', 'token_refresh')(''),
    errors: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_REQUEST:
        case types.REGISTER_SUCCESS:
            return { 
                ...state,
            };
        case types.REGISTER_ERROR:
            return {
                ...state,
                errors: action.errors,
            };
        case types.LOGIN_REQUEST:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.userData,
                }
            };
        case types.LOGIN_SUCCESS:
            return { 
                ...state,
                accessToken: action.token.token_access,
                refreshToken: action.token.token_refresh
            };

        case types.LOGIN_ERROR:
            return {
                ...state,
                errors: action.errors,
            };
        default:
            return state;
    }
};