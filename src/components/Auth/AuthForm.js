import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '@/constants';
import Formsy from 'formsy-react';
import localstorage from '@/helpers/localstorage';
import Input from '../common/Input';

class AuthForm extends React.Component {
    constructor(props){
        super(props);
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.state = { canSubmit: false, };
        this.submit = this.submit.bind(this);
    };

    submit(model) {
        this.props.login(model);
    }
    
    disableButton() {
        this.setState({ canSubmit: false });
    }
    
    enableButton() {
       this.setState({ canSubmit: true });
    }

    render() {
        return (
                <Formsy onValidSubmit={ this.submit } onValid={ this.enableButton } onInvalid={ this.disableButton }>
                    <div className="row justify-content-center">
                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                            <h1 className="enterText">
                                Вход
                            </h1>
                        </div>
                    </div>

                    <Input className="form-control auth-input" name="username"
                        type="text" label="Name" 
                        placeholder="Логин" validations="isExisty" 
                        validationError="Введите верный логин" required/>

                    <Input className="form-control auth-input" name="password" 
                        type="password" label="Password" 
                        placeholder="Пароль" validations="isExisty"
                        validationError="Введите верный пароль" required/>

                    <div className="row justify-content-center">
                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                            <button type="submit" className="btn auth-btn" disabled={!this.state.canSubmit}>ВХОД</button>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                            <Link to={ routes.REGISTER }>
                                <button className="btn register-btn" href={ routes.REGISTER }>
                                    РЕГИСТРАЦИЯ
                                </button>
                            </Link>
                        </div>
                    </div>
                </Formsy>
        );
    }
}


export default AuthForm;