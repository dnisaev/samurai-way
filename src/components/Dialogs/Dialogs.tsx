import React from 'react';
import styles from "./Dialogs.module.css";
import {v1} from "uuid";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

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
        return <Message key={m.id} message={m.message}/>
    });

    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messagesItems}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;