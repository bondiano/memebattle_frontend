import {fromJS} from 'immutable';

const initialState = fromJS({
    user: false,
    error: null
});

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
