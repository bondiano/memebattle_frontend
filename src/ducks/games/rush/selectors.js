export default {

    /**
     * @param {Immutable.Map} state
     * @returns {Immutable.Map|null}
     */
    selectError(state) {
        return state.getIn(['games', 'rush', 'error']);
    }
};
