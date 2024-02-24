import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type FormDataType = {
    login: string
    password: string
    rememberMe: string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    console.log('render: LoginForm')

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={"input"} name={"login"} placeholder={"Login"}/></div>
            <div><Field component={"input"} name={"password"} placeholder={"Password"}/></div>
            <div><Field component={"input"} name={"rememberMe"} type={"checkbox"}/>Запомнить меня</div>
            <div>
                <button>Войти</button>
            </div>
        </form>

    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm);

export const Login = () => {

    console.log('render: Login')

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};
