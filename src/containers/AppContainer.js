import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppComponent from '@/components/app/AppComponent';


class AppContainer extends Component {
    render() {
        return <AppComponent />;
    }
}

export default withRouter(
    connect()(AppContainer)
);
