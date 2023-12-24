import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
}

function App({state}: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route path={"/profile"} render={ ()=> <Profile
                        state={state.profilePage} />}/>
                    <Route path={"/dialogs"} render={ ()=> <Dialogs
                        state={state.dialogPage} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
