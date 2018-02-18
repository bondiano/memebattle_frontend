import types from './types';

const initialState = {
    liderlist:'',
    user: '',
    errors: '',
    leftMeme: {
        leftMemeId:'',
        leftMemeImg:'',
        leftLikes:''
    },
    rightMeme: {
        rightMemeId:'',
        rightMemeImg:'',
        rightLikes:''
    },
    lastGame: 0,
    winner:-2,
    inGame: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LIDERLIST_REQUEST:
            return {
                ...state
            };
        case types.LIDERLIST_SUCCESS:
            return {
                ...state,
                liderlist: {
                    ...state.liderlist,
                    ...action.data.globalRating
                },
                user: {
                    ...state.user,
                    ...action.data.userRating
                }
            };
        case types.LIDERLIST_ERROR:
            return {
                ...state,
                errors: action.errors
            };
        case types.PAIR_WINNER:
            return {
                ...state,
                leftMeme: {
                    ...state.leftMeme,
                    leftLikes: action.data.leftLikes
                },
                rightMeme: {
                    ...state.rightMeme,
                    rightLikes: action.data.rightLikes
                },
                winner: action.data.winner
            };
        case types.NEW_PAIR:
            return {
                ...state,
                leftMeme: {
                    ...state.leftMeme,
                    leftMemeId: action.data.leftMemeId,
                    leftMemeImg: action.data.leftMemeImg,
                    leftLikes: action.data.leftLikes
                },
                rightMeme: {
                    ...state.rightMeme,
                    rightMemeId: action.data.rightMemeId,
                    rightMemeImg: action.data.rightMemeImg,
                    rightLikes: action.data.rightLikes
                },
                winner: -1
            };
        case types.GET_MEM_PAIR_SUCCESS:
            return {
                ...state,
                leftMeme: {
                    ...state.leftMeme,
                    leftMemeId: action.data.leftMemeId,
                    leftMemeImg: action.data.leftMemeImg,
                    leftLikes: action.data.leftLikes
                },
                rightMeme: {
                    ...state.rightMeme,
                    rightMemeId: action.data.rightMemeId,
                    rightMemeImg: action.data.rightMemeImg,
                    rightLikes: action.data.rightLikes
                }
            };
        case types.CONNECT_TO_GAME_SUCCESS:
            return {
                ...state,
                inGame: true
            };
        case types.LEAVE_FROM_GAME_SUCCESS:
            return {
                ...state,
                inGame: false
            };
        case types.CONNECT_TO_GAME_REQUEST:
        case types.LEAVE_FROM_GAME_REQUEST:
        default:
            return state;
    }
};
