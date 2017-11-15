import React from 'react';
import AuthForm from './AuthForm';
import Logo from '../common/Logo';

class AuthComponent extends React.Component {
    render() {
        return (
            <section className="Auth container-fluid">
                <div className="row justify-content-center">
                    <div className="col col-xs-12 col-sm-8 col-md-6 col-lg-3 text-center">
                        <Logo />
                    </div>
                </div>
                <AuthForm {...this.props}/>
            </section>
        );
    }
}


export default AuthComponent;