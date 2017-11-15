import types from './types';

const initialState = {
    uid: '',
    username: '',
    avatar: '',
    memcoin: '',
    placeInRating: '',
    accesToken: '',
    refreshToken:''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_REQUEST:
        case types.REGISTER_SUCCESS:
            return { 
                ...state,
                accesToken: action.token, 
            }
        case types.LOGIN_REQUEST:
        case types.LOGIN_SUCCESS:
            return { 
                ...state,
                accesToken: action.token, 
            }
        default:
            return state;
    }
};