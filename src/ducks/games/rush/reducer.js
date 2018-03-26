import {fromJS} from 'immutable';

const initialState = fromJS({
    leaderList: [],
    error: null,
    leftMeme: null,
    rightMeme: null
});

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
