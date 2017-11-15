import React from 'react';
import RegisterForm from './RegisterForm';
import Logo from '../common/Logo';

class RegisterComponent extends React.Component {
    render() {
        return (
            <section className="Auth container-fluid">
                <div className="row justify-content-center">
                    <div className="col col-xs-12 col-sm-8 col-md-6 col-lg-3 text-center">
                        <Logo />
                    </div>
                </div>
                <RegisterForm {...this.props}/>
            </section>
        );
    }
}


export default RegisterComponent;
