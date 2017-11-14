import React from 'react';
import request from '../../helpers'

const defaultState = {
    login: "",
    password: "",
    confirm: false,
    email: "",
}

class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form: defaultState,
        };
        this.submitForm = this.submitForm.bind(this);
        console.log(props);
    }

    submitForm(e) {
        e.preventDefault();
        this.props.register(this.state.form);
    };

    changeHandler(name, event) {
        console.log(name, event.target.value);
        this.changeFilter({
            [name]: event.target.value,
        })
    };

    changeFilter(newFilters){
        this.setState((props, prevState) => {
            const oldForm = prevState.form;
            return {
                ...prevState,
                form: {
                    ...oldForm,
                    ...newFilters,
                }
            }
        })
    }

    render() {
        return (
            <form>
                <p>Логин:</p>
                <input value={this.state.form.login} onChange={this.changeHandler.bind(this, 'login')} type="text" label="Name" />
                <p>E-mail:</p>
                <input value={this.state.form.email} onChange={this.changeHandler.bind(this, 'email')} type="email" label="Email"></input>
                <p>Пароль:</p>
                <input value={this.state.form.password} onChange={this.changeHandler.bind(this, 'password')} type="password" label="Password"></input>
                <p>Подтвердите Пароль:</p>
                <input type="password" label="Password"></input>
                <p><input type="checkbox" label="Confirm"/> С правилами соглсен(а)</p>
                <button onClick={this.submitForm}>Отправить</button>
            </form>
        );
    }
}


export default RegisterForm;
