import types from './types';

const initialState = {
    liderlist:'',
    user: '',
    errors: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LIDERLIST_REQUEST:
            return {
                ...state,
            };
        case types.LIDERLIST_SUCCESS:
            return { 
                ...state,
                liderlist: {
                    ...state.liderlist,
                    ...action.data.globalRating,
                },
                 user: {
                     ...state.user,
                     ...action.data.userRating,
                 }
            };
        case types.LIDERLIST_ERROR:
            return {
                ...state,
                errors: action.errors,
            };
        default:
            return state;
    }
};