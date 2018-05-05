import {connect} from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'

import {appActions, appSelectors, modalTypes} from '@/ducks/app'
import * as modals from '@/components/modals'

const MODAL_COMPONENTS = {
    [modalTypes.BASE_MODAL]: modals.VkAuthModal,
};

class ModalManagerContainer extends React.Component {
    onPreviousModal = () => {
        const {modalsList, onShowModal, onRemove, onHideModal} = this.props;

        const previousIndex = modalsList.size - 2;
        if (previousIndex < 0) {
            onRemove();
            return onHideModal()
        }
        const previousModal = modalsList.get(previousIndex);

        const previousModalData = {
            modalType: previousModal.modalType,
            modalProps: previousModal.modalProps,
        };

        // go to previos modal, clear latest modal in state
        onRemove();
        return () => onShowModal(previousModalData)
    };

    render() {
        const {onHideModal, onShowModal, modalsList} = this.props;

        return modalsList.map((currentModal, index) => {
            if (
                !currentModal ||
                !Object.values(modalTypes).includes(currentModal.modalType)
            ) {
                return null
            }

            const {modalType, modalProps} = currentModal;
            const SpecificModalComponent = MODAL_COMPONENTS[modalType];

            return (
                <SpecificModalComponent
                    key={index}
                    onHideModal={onHideModal}
                    onPreviousModal={this.onPreviousModal}
                    onShowModal={onShowModal}
                    {...modalProps}
                />
            )
        })
    }
}

ModalManagerContainer.propTypes = {
    // modalsList: Immutable.arrayOf(
    //     PropTypes.shape({
    //         modalType: PropTypes.string.isRequired,
    //         modalProps: PropTypes.object.isRequired,
    //     }),
    // ).isRequired,
    // currentModal: PropTypes.shape({
    //     modalType: PropTypes.string.isRequired,
    //     modalProps: PropTypes.object.isRequired,
    // }),
    onHideModal: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    onShowModal: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        ...appSelectors.selectModals(state),
    }),
    {
        onShowModal: appActions.showModal,
        onHideModal: appActions.hideModal,
        onRemove: appActions.popModal,
    },
)(ModalManagerContainer)
