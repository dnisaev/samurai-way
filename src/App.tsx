import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionsType, StateType} from "./redux/store";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsType) => void
}

function App({state, dispatch}: AppPropsType) {
    console.log('render: App')
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route path={"/profile"} render={() => <Profile profilePage={state.profilePage}
                                                                dispatch={dispatch}/>}/>
                <Route path={"/dialogs"} render={() => <Dialogs state={state.dialogsPage}
                                                                newMessageText={state.dialogsPage.newMessageText}
                                                                dispatch={dispatch}/>}/>
            </div>
        </div>
    );
}

export default App;
