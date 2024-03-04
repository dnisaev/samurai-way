import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App() {
    console.log('render: App')
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route path={"/profile/:userId?"} render={() => <ProfileContainer />}/>
                <Route path={"/dialogs"} render={() => <DialogsContainer />}/>
                <Route path={"/users"} render={() => <UsersContainer />}/>
                <Route path={"/login"} render={() => <Login />}/>
            </div>
        </div>
    );
}

export default App;
