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
            }
        case types.LOGIN_REQUEST:
        console.log(action)
        return { 
            ...state,
            username: action.userData.username,
        }
        case types.LOGIN_SUCCESS:
        console.log(action)
            return { 
                ...state,
                accesToken: action.token.token_access,
                refreshToken: action.token.token_refresh
            }
        default:
            return state;
    }
};