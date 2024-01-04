import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/state";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store._state} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
    reportWebVitals();
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)