import React from 'react';
import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {v1} from "uuid";

type DialogDataType = {
    id: string
    name: string
}
type DialogMessageType = {
    id?: string
    message: string
}
const Dialog = ({name, id}: DialogDataType) => {
    return (
        <div className={style.dialog}>
            <NavLink to={`/dialogs/${id}`} activeClassName={style.active}>{name}</NavLink>
        </div>
    )
}
const Message = ({message}: DialogMessageType) => {
    return <div className={style.message}>{message}</div>
}

const Dialogs = () => {
    const DialogsMessages = [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Whats up?'},
        {id: v1(), message: 'How are you?'}
    ];
    const DialogsData = [
        {id: v1(), name: 'Dmitriy'},
        {id: v1(), name: 'Anya'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Mama'},
        {id: v1(), name: 'Papa'},
        {id: v1(), name: 'Vladimir'},
        {id: v1(), name: 'Andrey'}
    ];

    let dialogsElements = DialogsData.map((d) => {
        return <Dialog key={d.id} name={d.name} id={d.id}/>
    });

    let messagesElements = DialogsMessages.map((m)=>{
        return  <Message key={m.id} message={m.message}/>
    });

    return (
        <div className={style.dialogsWrapper}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messagesItems}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;