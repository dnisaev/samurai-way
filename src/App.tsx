import React from "react";
import "./App.css";
import { HashRouter, Route, withRouter } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeAppTC } from "./redux/app-reducer";
import { AppRootStateType, store } from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";
import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));

class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initializeAppTC();
  }

  render() {
    if (!this.props.initialized) return <Preloader />;

    return (
      <div className={"app-wrapper"}>
        <HeaderContainer />
        <NavBar />
        <div className={"app-wrapper-content"}>
          <Route path={"/profile/:userId?"} render={withSuspense(ProfileContainer)} />
          <Route path={"/dialogs"} render={withSuspense(DialogsContainer)} />
          <Route path={"/users"} render={withSuspense(UsersContainer)} />
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

const AppContainer = compose<React.ComponentType>(connect(mapStateToProps, { initializeAppTC }), withRouter)(App);

export const SamuraiApp = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

type MapStatePropsType = {
  initialized: boolean;
};
type MapDispatchPropsType = {
  initializeAppTC: () => void;
};
type AppPropsType = MapStatePropsType & MapDispatchPropsType;
