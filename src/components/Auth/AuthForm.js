import React from 'react';

const defaultState = {
    username: "",
    password: "",
    confirm: false,
}

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

    render() {
        return (
                <form>
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
                                <input className="auth-input" type="checkbox" label="Confirm" id="checkbox-rules"/> 
                                <label htmlFor="checkbox-rules"><span className="checkbox-custom"></span>С правилами ознакомился</label>
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                            <button className="btn auth-btn" onClick={this.submitForm}>Вход</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                            <a className="btn auth-btn" href="/register">Регистрация</a>
                        </div>
                    </div>
                </form>
        );
    }
}


export default AuthForm;