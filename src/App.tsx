import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    addPost: (postMessage: string) => void
}

function App({state, addPost}: AppPropsType) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route path={"/profile"} render={() => <Profile
                    state={state.profilePage} addPost={addPost}/>}/>
                <Route path={"/dialogs"} render={() => <Dialogs
                    state={state.dialogPage}/>}/>
            </div>
        </div>
    );
}

export default App;
