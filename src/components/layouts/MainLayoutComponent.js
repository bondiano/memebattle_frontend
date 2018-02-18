import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

class MainLayoutComponent extends React.Component {
    static propTypes = {
        component: PropTypes.node.isRequired,
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
            <div className="app">
                <div className="content">
                    <InnerComponent { ...matchProps } { ...props } />
                </div>
            </div>
        );
        return <Route
            path={path}
            exact={exact}
            render={ innerView }
            { ...props }
        />;
    }
}


export default MainLayoutComponent;
