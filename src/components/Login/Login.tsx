import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { loginTC } from "../../redux/auth-reducer";
import { AppRootStateType } from "../../redux/redux-store";
import { Redirect } from "react-router-dom";
import styles from "../common/FormsControls/FormsControls.module.css";

const LoginForm: React.FC<
  InjectedFormProps<LoginFormDataType, { captchaUrl: string | null }> & {
    captchaUrl: string | null;
  }
> = ({ handleSubmit, error, captchaUrl }) => {
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
      {captchaUrl && <img src={captchaUrl} alt={'captcha'}/>}
      {captchaUrl && createField("Введите символы с картинки", "captcha", [required], Input, {})}
      {error && <div className={styles.formSummeryError}>{error}</div>}
      <div>
        <button>Войти</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormDataType, { captchaUrl: string | null }>({
  form: "login",
})(LoginForm);

const Login = (props: LoginPropsType) => {
  const onSubmit = (formData: LoginFormDataType) => {
    const { email, password, rememberMe, captcha } = formData;
    props.loginTC(email, password, rememberMe, captcha);
  };

  if (props.isAuth) return <Redirect to={"/profile"} />;

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state: AppRootStateType) => {
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { loginTC })(Login);

type LoginFormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};
type LoginPropsType = {
  loginTC: (email: string, password: string, rememberMe: boolean, captcha: string) => void;
  isAuth: boolean;
  captchaUrl: string | null;
};
