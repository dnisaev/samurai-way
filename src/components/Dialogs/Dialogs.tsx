import React from 'react';
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    state: DialogsPageType
    sendMessage: () => void
    updateNewMessageText: (text: string) => void
}

const Dialogs = ({state, sendMessage, updateNewMessageText}: DialogsPropsType) => {

    let dialogsElements = state.dialogs.map((d) => {
        return <Dialog key={d.id} name={d.name} id={d.id}/>
    });

    let messagesElements = state.messages.map((m) => {
        return <Message key={m.id} message={m.message} id={m.id}/>
    });

    const newMessageElement = React.createRef<HTMLTextAreaElement>();
    const onSendMessage = () => {
        sendMessage()
    }
    const onMessageChange = () => {
        let text = newMessageElement.current?.value;
        if (text) {
            updateNewMessageText(text)
        }
    }

    // console.log('render: Dialogs')
    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messagesItems}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea onChange={onMessageChange}
                                  ref={newMessageElement}
                                  value={state.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={onSendMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;