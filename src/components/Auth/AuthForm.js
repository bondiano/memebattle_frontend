import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '@/constants';
import localstorage from '../../helpers/localstorage';

const defaultState = {
    username: "",
    password: "",
};

class AuthForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            form: defaultState
        };
        this.submitForm = this.submitForm.bind(this);
    };

    submitForm(e) {
        e.preventDefault();
        localstorage('clear')();
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
                            <input className="form-control auth-input" value={ this.state.username } onChange={ this.changeHandler.bind(this, 'username') } type="text" label="Name" placeholder="Логин"/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <input className="form-control auth-input" value={ this.state.password } onChange={ this.changeHandler.bind(this, 'password') } type="password" label="Password" placeholder="Пароль"/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                            <button className="btn auth-btn" onClick={ this.submitForm }>ВХОД</button>
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
                </form>
        );
    }
}


export default AuthForm;