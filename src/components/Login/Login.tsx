import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { loginTC } from "../../redux/auth-reducer";
import { AppRootStateType } from "../../redux/redux-store";
import { Redirect } from "react-router-dom";
import styles from "../common/FormsControls/FormsControls.module.css";

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component={Input} name={"email"} placeholder={"Email"} type={"email"} validate={[required]} />
      </div>
      <div>
        <Field component={Input} name={"password"} placeholder={"Password"} type={"password"} validate={[required]} />
      </div>
      <div className={styles.rememberMe}>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />
        Запомнить меня
      </div>
      {error && <div className={styles.formSummeryError}>{error}</div>}
      <div>
        <button>Войти</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormDataType>({
  form: "login",
})(LoginForm);

const Login = ({ loginTC, isAuth }: LoginPropsType) => {
  const onSubmit = (formData: LoginFormDataType) => {
    const { email, password, rememberMe } = formData;
    loginTC(email, password, rememberMe);
  };

  if (isAuth) return <Redirect to={"/profile"} />;

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state: AppRootStateType) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { loginTC })(Login);

type LoginFormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
type LoginPropsType = {
  loginTC: (email: string, password: string, rememberMe: boolean) => void;
  isAuth: boolean;
};
