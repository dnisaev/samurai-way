import React from 'react';
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogsPropsType} from "../../index";

const Dialogs = ({dialogsData, dialogsMessagesData}: DialogsPropsType) => {

    let dialogsElements = dialogsData.map((d) => {
        return <Dialog key={d.id} name={d.name} id={d.id}/>
    });

    let messagesElements = dialogsMessagesData.map((m)=>{
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