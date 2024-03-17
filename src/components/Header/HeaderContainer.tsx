import React from "react";
import { connect } from "react-redux";
import { AppRootStateType } from "../../redux/redux-store";
import { logoutTC } from "../../redux/auth-reducer";
import { Header } from "./Header";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  render() {
    return <Header login={this.props.login} logout={this.props.logoutTC} isAuth={this.props.isAuth} />;
  }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { logoutTC })(HeaderContainer);

type MapStatePropsType = {
  isAuth: boolean;
  login: string | null;
};
type MapDispatchPropsType = {
  logoutTC: () => void;
};
type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType;
