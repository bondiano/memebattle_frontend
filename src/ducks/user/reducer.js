import types from './types';
import localstorage from '../../helpers/localstorage';

const initialState = {
    login: null,
    user: {
        _id: localstorage('get', 'id')(''),
        username: localstorage('get', 'username')(''),
        avatar: localstorage('get', 'avatar')(''),
        memcoin: localstorage('get', 'memcoin')(0),
        permissions: localstorage('get', 'permissions')(''),
    },
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
                errors: {
                    ...state.errors,
                    ...action.errors,
                },
            };
        case types.LOGIN_REQUEST:
            return {
                ...state,
            };
        case types.LOGIN_SUCCESS:
            return { 
                ...state,
                login: action.data.success,
                user: {
                    ...state.user,
                    _id: action.data._id,
                    username: action.data.username,
                    memcoin: action.data.coins,
                    permissions: action.data.permissions,
                },
            };
        case types.LOGIN_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    ...action.errors,
                },
            };
        case types.LOGIN_CHECK_REQUEST:
            return {
                ...state,
            };
        case types.LOGIN_CHECK_SUCCESS:
            return { 
                ...state,
                login: action.data.success,
            };
        case types.LOGIN_CHECK_ERROR:
            return {
                ...state,
                login: false,
                errors: {
                    ...state.errors,
                    ...action.error,
                },
            };
        case types.LIDERLIST_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    memcoin: action.data.userRating.coins,
                }
            };
        case types.LOGOUT:
            return {
                ...state,
                login: false,
            };
        case types.ADD_COIN:
            return {
                ...state,
                user: {
                    ...state.user,
                    memcoin: action.data.coins,
                }
            };
        default:
            return state;
    }
};