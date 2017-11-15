import React from 'react';
import AuthForm from './AuthForm';

class AuthComponent extends React.Component {
    render() {
        return (
            <div>
                <AuthForm {...this.props}/>
                <a href="/register"><button onClick={() => false}>Регистрация</button></a>
            </div>
        );
    }
}


export default AuthComponent;