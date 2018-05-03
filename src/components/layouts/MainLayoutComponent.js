import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

function MainLayoutComponent() {
    const {
        component: InnerComponent,
        path,
        exact,
        ...props
    } = this.props;

    const innerView = matchProps => (
        <section className="main-layout">
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

MainLayoutComponent.propTypes = {
    component: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

export default MainLayoutComponent;
