import {fromJS, Map, List} from 'immutable';
import types from './types';

const initialState = fromJS({
    error: null,
    modals: List(),
});

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_MODAL:
            return state.set('modals', state.get('modals').push({
                modalType: action.modalType,
                modalProps: action.modalProps,
            }));

        case types.POP_MODAL:
            return state.set('modals', state.get('modals').pop());
        case types.HIDE_MODAL:
            return state.set('modals', state.get('modals').clear());

        default:
            return state;
    }
};
