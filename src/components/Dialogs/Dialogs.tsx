import React from 'react';
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
}

const Dialogs = ({state}: DialogsPropsType) => {

    let dialogsElements = state.dialogs.map((d) => {
        return <Dialog key={d.id} name={d.name} id={d.id}/>
    });

    let messagesElements = state.messages.map((m) => {
        return <Message key={m.id} message={m.message} id={m.id}/>
    });

    const newMessageElement = React.createRef<HTMLTextAreaElement>();
    const sendMessage = () => {
        let text = newMessageElement.current?.value;
        console.log(text);
    }

    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messagesItems}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement}/>
                    <div>
                        <button onClick={sendMessage}>send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;