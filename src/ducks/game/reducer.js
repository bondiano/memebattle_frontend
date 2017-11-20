import types from './types';

const initialState = {
    liderlist:{
        "1" : {
            username: "meow",
            coins: "100",
        },
    },
    errors: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LIDERLIST_REQUEST:
            return {
                ...state,
            };
        case types.LIDERLIST_SUCCESS:
            console.log(action.data);
            return { 
                ...state,
                liderlist: {
                    ...action.data.dataTop,
                },
                 user: {
                     ...state.user,
                     ...action.data.dataUser,
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