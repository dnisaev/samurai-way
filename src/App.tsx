import React from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch, withRouter } from "react-router-dom";
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
  catchAllUnhandledErrors = (promiseRejectionEvent: any) => {
    console.error(promiseRejectionEvent);
  };
  componentDidMount() {
    this.props.initializeAppTC();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) return <Preloader />;

    return (
      <div className={"app-wrapper"}>
        <HeaderContainer />
        <NavBar />
        <div className={"app-wrapper-content"}>
          <Switch>
            <Route exact path={"/"} render={() => <Redirect to={"/profile"} />} />
            <Route exact path={"/samurai-way"} render={() => <Redirect to={"/profile"} />} />
            <Route path={"/profile/:userId?"} render={withSuspense(ProfileContainer)} />
            <Route path={"/dialogs"} render={withSuspense(DialogsContainer)} />
            <Route path={"/users"} render={withSuspense(UsersContainer)} />
            <Route path={"/login"} render={() => <Login />} />
            <Route path={"*"} render={() => <div>404 PAGE NOT FOUND</div>} />
          </Switch>
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
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

type MapStatePropsType = {
  initialized: boolean;
};
type MapDispatchPropsType = {
  initializeAppTC: () => void;
};
type AppPropsType = MapStatePropsType & MapDispatchPropsType;
