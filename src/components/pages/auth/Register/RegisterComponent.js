import React from 'react';
import Formsy from 'formsy-react';

import {FormsyInputComponent} from 'components/controls';

function RegisterComponent() {
    return (
        <section>
            <div>
                <h1 className="enterText">
                    Регистрация
                </h1>
            </div>
            <Formsy>
                <FormsyInputComponent
                    inputClasses="auth-input"
                    name="email"
                    type="text"
                    placeholder="E-mail"
                    required
                />

                <FormsyInputComponent
                    inputClasses="auth-input"
                    name="username"
                    type="text"
                    placeholder="Имя пользователя"
                    required
                />

                <FormsyInputComponent
                    inputClasses="auth-input"
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    required
                />

                <p className="accept-rules">
                    <input className="auth-input" type="checkbox" label="Confirm" id="checkbox-rules"/>
                    <label htmlFor="checkbox-rules">
                        <span className="checkbox-custom"/>
                        <p>С правилами ознакомлен</p>
                    </label>
                </p>

                <button className="auth-btn" type="submit">
                    РЕГИСТРАЦИЯ
                </button>
            </Formsy>
        </section>
    );
}

export default RegisterComponent;
