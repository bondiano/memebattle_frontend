export default {
    /**
     * @param {Immutable.Map} state
     * @returns {Immutable.Map|null}
     */
    selectError(state) {
        return state.getIn(['app', 'error']);
    },

    /**
     * Select all modals in modal's list
     * @param {Immutable.Map} state
     * @return {Object}
     */
    selectModals(state) {
        return {
            modalsList: state.getIn(['app', 'modals']),
            currentModal: state.getIn(['app', 'modals']).last(),
        }
    },
};
