import React from 'react';

const defaultState = {
    username: "",
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
                <input value={this.state.username} onChange={this.changeHandler.bind(this, 'username')} type="text" label="Name" placeholder="Логин"/>
                <input value={this.state.email} onChange={this.changeHandler.bind(this, 'email')} type="email" label="Email" placeholder="E-mail"/>
                <input value={this.state.password} onChange={this.changeHandler.bind(this, 'password')} type="password" label="Password" placeholder="Пароль"/>
                <input type="password" label="Password" placeholder="Подтвердите Пароль"></input>
                <p><input type="checkbox" label="Confirm"/> С правилами соглсен(а)</p>
                <button onClick={this.submitForm}>Отправить</button>
            </form>
        );
    }
}


export default RegisterForm;
