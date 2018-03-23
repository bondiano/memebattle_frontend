import queryString from 'query-string';

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
    },

    /**
     * Select query object
     *
     * @param {Immutable.Map} state
     * @return {Object}
     */
    selectQuery(state) {
        const query = state.getIn(['routing', 'locationBeforeTransitions', 'search']);
        return {
            query: queryString.parse(query)
        };
    },

    /**
     * Select router initialized status
     *
     * @param {Immutable.Map} state
     * @returns {Object}
     */
    selectRouterStatus(state) {
        return {
            isInitialized: state.getIn(['routing', 'isInitialized'])
        };
    }
};
