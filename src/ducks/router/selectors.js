export default {
    /**
     * Select location object
     *
     * @param {Immutable.Map} state
     * @return {Object}
     */
    selectLocation(state) {
        return {
            location: state.getIn(['routing', 'locationBeforeTransitions'])
        };
    },

    /**
     * Select pathname
     *
     * @param {Immutable.Map} state
     * @return {Object}
     */
    selectPathname(state) {
        return {
            pathname: state.getIn(['routing', 'locationBeforeTransitions', 'pathname'])
        };
    }
};
