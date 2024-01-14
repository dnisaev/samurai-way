import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {ReducersType, store} from "./redux/redux-store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let rerenderEntireTree = (state: ReducersType) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
    reportWebVitals();
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    const state = store.getState();
    rerenderEntireTree(state);
})