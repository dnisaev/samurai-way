import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    console.log('render: LoginForm')

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input}
                        name={"login"}
                        placeholder={"Login"}
                        validate={[required]}/></div>
            <div><Field component={Input}
                        name={"password"}
                        placeholder={"Password"}
                        validate={[required]}/></div>
            <div><Field component={Input}
                        name={"rememberMe"}
                        type={"checkbox"}/>Запомнить меня
            </div>
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
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
