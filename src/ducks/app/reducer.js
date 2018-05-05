import {fromJS, Map, List} from 'immutable';
import types from './types';

const initialState = fromJS({
    error: null,
    modals: List(),
});

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_MODAL:
            console.log('SHOW MODAL', action, '\n\n ', state.setIn(['modals', state.get('modals').push({
                modalType: action.modalType,
                modalProps: action.modalProps,
            })]));
            return state.set('modals', state.get('modals').push({
                modalType: action.modalType,
                modalProps: action.modalProps,
            }));

        case types.POP_MODAL:
            return state.modals.pop();
        case types.HIDE_MODAL:
            return state.modals.clear();

        default:
            return state;
    }
};
