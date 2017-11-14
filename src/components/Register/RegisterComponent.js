import React from 'react';
import RegisterForm from './RegisterForm';

class RegisterComponent extends React.Component {
    render() {
        return (
            <div>
                <RegisterForm {...this.props}/>
            </div>
        );
    }
}


export default RegisterComponent;
