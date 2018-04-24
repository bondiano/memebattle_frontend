import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Logo from 'components/shared/Logo';

class AuthLayoutComponent extends Component {
    static propTypes = {
        component: PropTypes.func.isRequired,
        path: PropTypes.string.isRequired,
        exact: PropTypes.bool
    };

    render() {
        const {
            component: InnerComponent,
            path,
            exact,
            ...props
        } = this.props;

        const innerView = matchProps => (
            <section className="auth-layout">
                <Logo size="medium"/>
                <InnerComponent { ...matchProps } { ...props } />
            </section>
        );

        return <Route
            path={path}
            exact={exact}
            render={innerView}
            {...props}
        />;
    }
}


export default AuthLayoutComponent;
