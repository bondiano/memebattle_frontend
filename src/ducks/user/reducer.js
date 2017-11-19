import types from './types';

const initialState = {
    user: {
        _id: '',
        username: '',
        avatar: '',
        memcoin: 0,
        placeInRating: 0,
    },
    accessToken: '',
    refreshToken:'',
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