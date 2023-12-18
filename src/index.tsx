import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {v1} from "uuid";

export type PropsType = {
    dialogsMessagesData: Array<DialogsMessagesDataType>
    dialogsData: Array<DialogsDataType>
}
export type DialogsMessagesDataType = {
    id: string,
    message: string
};
export type DialogsDataType = {
    id: string,
    name: string
};
const dialogsMessagesData = [
    {id: v1(), message: 'Hello'},
    {id: v1(), message: 'Hi'},
    {id: v1(), message: 'Whats up?'},
    {id: v1(), message: 'How are you?'}
];
const dialogsData = [
    {id: v1(), name: 'Dmitriy'},
    {id: v1(), name: 'Anya'},
    {id: v1(), name: 'Sveta'},
    {id: v1(), name: 'Mama'},
    {id: v1(), name: 'Papa'},
    {id: v1(), name: 'Vladimir'},
    {id: v1(), name: 'Andrey'}
];

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App dialogsData={dialogsData} dialogsMessagesData={dialogsMessagesData}/>
    </React.StrictMode>
);
reportWebVitals();
