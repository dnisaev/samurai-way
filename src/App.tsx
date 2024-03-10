import React from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeAppTC } from "./redux/app-reducer";
import { AppRootStateType } from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initializeAppTC();
  }

  render() {
    if (!this.props.initialized) return <Preloader />;

    console.log("render: App");
    return (
      <div className={"app-wrapper"}>
        <HeaderContainer />
        <NavBar />
        <div className={"app-wrapper-content"}>
          <Route path={"/profile/:userId?"} render={() => <ProfileContainer />} />
          <Route path={"/dialogs"} render={() => <DialogsContainer />} />
          <Route path={"/users"} render={() => <UsersContainer />} />
          <Route path={"/login"} render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppRootStateType) => {
  return {
    initialized: state.app.initialized,
  };
};

export default compose<React.ComponentType>(connect(mapStateToProps, { initializeAppTC }), withRouter)(App);

type MapStatePropsType = {
  initialized: boolean;
};
type MapDispatchPropsType = {
  initializeAppTC: () => void;
};
type AppPropsType = MapStatePropsType & MapDispatchPropsType;
