import React, { Component } from 'react';
import Logo from 'components/shared/Logo';

class LoginComponent extends Component {
    render() {
        return (
            <section className="Auth container-fluid">
                <div className="row justify-content-center">
                    <div className="col col-xs-12 col-sm-8 col-md-6 col-lg-3 text-center">
                        <Logo />
                    </div>
                </div>
                <form>
                    <div className="row justify-content-center">
                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                            <h1 className="enterText">
                                Вход
                            </h1>
                        </div>
                    </div>
                    <input
                        className="form-control auth-input"
                        name="username"
                        type="text" label="Name"
                        placeholder="Логин"
                        required
                    />

                    <input
                        className="form-control auth-input"
                        name="username"
                        type="text" label="Name"
                        placeholder="Логин"
                        required
                    />

                    <div className="row justify-content-center">
                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                            <button type="submit" className="btn auth-btn">
                                ВХОД
                            </button>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center">
                            <button className="btn register-btn" >
                                РЕГИСТРАЦИЯ
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}


export default LoginComponent;
