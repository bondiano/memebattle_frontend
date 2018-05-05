import types from './types'

const actions = {

    /**
     * Add modal to current modal's list
     *
     * @param {String} modalType
     * @param {Object} modalProps
     * @returns {Object}
     */
    showModal(modalType, modalProps = {}) {
        return {
            type: types.SHOW_MODAL,
            modalType,
            modalProps,
        }
    },

    /**
     * Pop curent latest modal from modal's list
     * @return {Object}
     */
    popModal() {
        return {
            type: types.POP_MODAL,
        }
    },

    /**
     * Hides a specific modal
     * @returns {Object}
     */
    hideModal() {
        return {
            type: types.HIDE_MODAL,
        }
    },
};

export default actions;
