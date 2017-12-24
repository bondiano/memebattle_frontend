import React from 'react';
import { replace } from 'react-router-redux';

class LogoutComponent extends React.Component {
    componentWillMount () {
        this.props.logout();
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}


export default LogoutComponent;