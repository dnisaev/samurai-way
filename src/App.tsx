import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {PropsType} from "./index";

function App({dialogsMessagesData, dialogsData}: PropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route path={"/profile"} render={ ()=> <Profile />}/>
                    <Route path={"/dialogs"} render={ ()=> <Dialogs
                        dialogsMessagesData={dialogsMessagesData}
                        dialogsData={dialogsData} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
