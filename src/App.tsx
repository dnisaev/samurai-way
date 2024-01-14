import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {ReducersType, ActionsType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    state?: ReducersType
    dispatch?: (action: ActionsType) => void
}

function App({}: AppPropsType) {
    // console.log('render: App')
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route path={"/profile"} render={() => <Profile />}/>
                <Route path={"/dialogs"} render={() => <DialogsContainer />}/>
            </div>
        </div>
    );
}

export default App;
