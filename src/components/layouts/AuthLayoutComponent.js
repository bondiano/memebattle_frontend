import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Logo from '@/components/shared/Logo';

function AuthLayoutComponent() {

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

    return (
        <Route
            path={path}
            exact={exact}
            render={innerView}
            {...props}
        />
    );
}

AuthLayoutComponent.propTypes = {
    component: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

export default AuthLayoutComponent;
