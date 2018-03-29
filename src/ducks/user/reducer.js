import {fromJS} from 'immutable';

const initialState = fromJS({
    user: false,
    error: null
});

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            if (action.user && action.user.userData) {
                return state.set('user', action.user.userData);
            }

            return state;
    }
};
