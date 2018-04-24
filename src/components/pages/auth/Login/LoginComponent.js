import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';

import { Link } from 'react-router-dom';
import { Routes } from 'constants.js';
import {FormsyInputComponent} from 'components/controls';

import telegramIcon from 'assets/images/social/telegram.svg';
import vkIcon from 'assets/images/social/vk.svg';
import twitterIcon from 'assets/images/social/twitter.svg';

class LoginComponent extends Component {
    propTypes = {
        onSubmit: PropTypes.func.isRequired,
        onValid: PropTypes.func.isRequired,
        onInvalid: PropTypes.func.isRequired
    };

    render() {
        return (
            <section>
                <div>
                    <h1>
                        Вход
                    </h1>
                </div>

                <Formsy onSubmit={this.props.onSubmit} onValid={this.props.onValid} onInvalid={this.props.onInvalid}>
                    <FormsyInputComponent name="username"/>
                    <FormsyInputComponent name="password"/>

                    <div>
                        <button>
                            <img src={twitterIcon}/>
                            Facebook
                        </button>
                        <button>
                            <img src={twitterIcon}/>
                            Twitter
                        </button>
                        <button>
                            <img src={vkIcon}/>
                            Vkontakte
                        </button>
                        <button>
                            <img src={telegramIcon}/>
                            Telegram
                        </button>
                    </div>

                    <button type="submit">
                        ВХОД
                    </button>
                </Formsy>

                <div>
                    <p>Нет аккаунта?</p>
                    <Link to={Routes.REGISTER}>Зарегистрироваться</Link>
                </div>
            </section>
        );
    }
}

export default LoginComponent;
