import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsPropsType, PostsPropsType} from "./index";

function App({dialogsMessagesData, dialogsData, postsData}: DialogsPropsType & PostsPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route path={"/profile"} render={ ()=> <Profile
                        postsData={postsData} />}/>
                    <Route path={"/dialogs"} render={ ()=> <Dialogs
                        dialogsMessagesData={dialogsMessagesData}
                        dialogsData={dialogsData} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
