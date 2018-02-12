import React from 'react';
import Formsy from 'formsy-react';
import Input from '../common/Input';
import errorHandler from '../../helpers/errorHandler';
import { errors } from 'constants';

const defaultState = {
    confirm: false,
}

class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...defaultState,
            canSubmit: false,
        };
        this.error = {};
        this.submit = this.submit.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
    }

    submit(model) {
        this.props.register(model);
    }
    
    disableButton() {
        this.setState({ canSubmit: false });
    }
    
    enableButton() {
       this.setState({ canSubmit: true });
    }

    handleCheckChange(){       
        this.setState((prevState) => ({
            ...prevState,
            confirm: !this.state.confirm,
        }));
    };

    componentWillUpdate(nextProps, nextState) {
        if (this.props.userError !== nextProps.userError) {
            this.error = errorHandler(nextProps.userError);
            if(this.error.EXTUSR) {
                this.refs.form.updateInputsWithError({
                    username: errors.EXTUSR,
                });
            }
            if(this.error.EXTEMAIL) {
                this.refs.form.updateInputsWithError({
                    email: errors.EXTEMAIL,
                });
            }
        }
    }

    render() {
        return (
            <Formsy ref="form" onValidSubmit={ this.submit } onValid={ this.enableButton } onInvalid={ this.disableButton }>
                <div className="row justify-content-center">
                    <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                        <h1 className="enterText">
                            Регистрация
                        </h1>
                    </div>
                </div>

                <Input className="form-control auth-input" name="username" type="text" 
                        label="Name" placeholder="Логин" validations="isExisty"
                        validationError="Введите верный логин" required/>

                <Input className="form-control auth-input" name="email" type="email" 
                        label="Email" placeholder="E-mail" validations="isEmail"
                        validationError="Введите верный email" required/>

                <Input className="form-control auth-input" name="password" type="password" 
                        label="Password" placeholder="Пароль" validations="isExisty"
                        validationError="Введите верный пароль" required/>

                <div className="row justify-content-center">
                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <p className="accept-rules">
                                <input className="auth-input" onChange={ this.handleCheckChange } type="checkbox" label="Confirm" id="checkbox-rules"/> 
                                <label htmlFor="checkbox-rules"><span className="checkbox-custom"></span>С правилами соглсен(а)</label>
                            </p>
                        </div>
                </div>

                <div className="row justify-content-center">
                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                            <button className="btn auth-btn" type="submit" disabled={ !this.state.confirm || !this.state.canSubmit }>ПОДТВЕРДИТЬ</button>
                        </div>
                    </div>
            </Formsy>
        );
    }
}


export default RegisterForm;
