import React from 'react';

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
            form: defaultState
        };
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
        e.preventDefault();
        this.props.register(this.state.form);
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
                <p>Логин:</p>
                <input value={this.state.login} onChange={this.changeHandler.bind(this, 'login')} type="text" label="Name" />
                <p>E-mail:</p>
                <input value={this.state.email} onChange={this.changeHandler.bind(this, 'email')} type="email" label="Email"></input>
                <p>Пароль:</p>
                <input value={this.state.password} onChange={this.changeHandler.bind(this, 'password')} type="password" label="Password"></input>
                <p>Подтвердите Пароль:</p>
                <input type="password" label="Password"></input>
                <p><input type="checkbox" label="Confirm"/> С правилами соглсен(а)</p>
                <button onClick={this.submitForm}>Отправить</button>
            </form>
        );
    }
}


export default RegisterForm;
