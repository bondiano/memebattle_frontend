import React from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';

import { Link } from 'react-router-dom';
import { Routes, socialNetwork } from 'constants.js';
import {FormsyInputComponent} from 'components/controls';
import SocialNetworkButton from './SocialNetworkButton';

function LoginComponent({onSubmit, onValid, onInvalid}) {
    return (
        <section>
            <div>
                <h1>
                    Вход
                </h1>
            </div>

            <Formsy onSubmit={onSubmit} onValid={onValid} onInvalid={onInvalid}>
                <div className="input-block">
                    <FormsyInputComponent
                        inputClasses="auth-input"
                        name="username"
                        placeholder="Логин или e-mail"
                        type="text"/>
                    <FormsyInputComponent
                        inputClasses="auth-input"
                        name="password"
                        placeholder="Пароль"
                        type="password"/>
                </div>

                <p>или войти с помощью</p>
                <div className="social-buttons-block">
                    <SocialNetworkButton socialNetwork={socialNetwork.vk}/>
                    <SocialNetworkButton socialNetwork={socialNetwork.twitter}/>
                    <SocialNetworkButton socialNetwork={socialNetwork.telegram}/>
                    <SocialNetworkButton socialNetwork={socialNetwork.facebook}/>
                </div>

                <button type="submit" className="auth-btn">
                    ВХОД
                </button>
            </Formsy>

            <div className="sub-block">
                <p>Нет аккаунта?</p>
                <Link to={Routes.REGISTER}>Зарегистрироваться</Link>
            </div>
        </section>
    );
}

LoginComponent.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onValid: PropTypes.func.isRequired,
    onInvalid: PropTypes.func.isRequired
};

export default LoginComponent;
