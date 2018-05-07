import React, {Component} from 'react';
import { connect } from 'react-redux';
import {RegisterComponent} from '@/components/pages/auth';

class RegisterContainer extends Component {
    render() {
        return <RegisterComponent />;
    }
}

export default connect()(RegisterContainer);
