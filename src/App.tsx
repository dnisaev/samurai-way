import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import NavBar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
    console.log('render: App')
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route path={"/profile"} render={() => <ProfileContainer />}/>
                <Route path={"/dialogs"} render={() => <DialogsContainer />}/>
                <Route path={"/users"} render={() => <UsersContainer />}/>
            </div>
        </div>
    );
}

export default App;
