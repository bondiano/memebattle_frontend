import React, {Component} from 'react';
import { connect } from 'react-redux';
import {LoginComponent} from '@/components/pages/auth';

class LoginContainer extends Component {
    render() {
        return <LoginComponent />;
    }
}

export default connect()(LoginContainer);
