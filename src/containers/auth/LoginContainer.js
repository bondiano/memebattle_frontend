import React, {Component} from 'react';
import { connect } from 'react-redux';
import {LoginComponent} from 'components/pages/auth';
import {appActions, modalTypes} from '@/ducks/app';


class LoginContainer extends Component {

    showModal = () => {
        return this.props.vkAuth(modalTypes.BASE_MODAL, {})
    };
    render() {
        return <LoginComponent vkAuth={this.showModal} />;
    }
}

export default connect(null, {
    vkAuth: appActions.showModal,
})(LoginContainer);
