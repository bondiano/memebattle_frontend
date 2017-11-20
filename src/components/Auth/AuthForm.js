import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '@/constants';

const defaultState = {
    username: "",
    password: "",
    confirm: false,
};

class AuthForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            form: defaultState
        };
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
        e.preventDefault();
        this.props.login(this.state.form);
    };

    changeHandler(name, event) {
        this.changeFilter({
            [name]: event.target.value,
        });
    };

    changeFilter(data) {
        if(!data) return;
        this.setState((prevState) => ({
                ...prevState,
                form: {
                    ...prevState.form,
                    ...data,
                }
        }));
    };

    handleCheckChange(){       
        this.setState((prevState) => ({
            ...prevState,
            form: {
                ...prevState.form,
                confirm: !this.state.form.confirm,
            }
        }));
    };

    render() {
        return (
                
                <form>
                    <div className="row justify-content-center">
                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                            <h1 className="enterText">
                                Вход
                            </h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <input className="form-control auth-input" value={this.state.username} onChange={this.changeHandler.bind(this, 'username')} type="text" label="Name" placeholder="Логин"/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <input className="form-control auth-input" value={this.state.password} onChange={this.changeHandler.bind(this, 'password')} type="password" label="Password" placeholder="Пароль"/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <p className="accept-rules">
                                <input className="auth-input" onChange={this.handleCheckChange.bind(this)} type="checkbox" label="Confirm" id="checkbox-rules"/> 
                                <label htmlFor="checkbox-rules"><span className="checkbox-custom" />С правилами ознакомился</label>
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                            <button className="btn auth-btn" onClick={this.submitForm} disabled={!this.state.form.confirm}>ВХОД</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                            <Link to={routes.REGISTER}>
                                <button className="btn register-btn" href={routes.REGISTER}>
                                    РЕГИСТРАЦИЯ
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
        );
    }
}


export default AuthForm;