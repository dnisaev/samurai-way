import React from 'react';
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {
    ActionsType,
    DialogsPageType,
} from "../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    state: DialogsPageType
    newMessageText: string
    dispatch: (action: ActionsType) => void
}

const Dialogs = ({state, newMessageText, dispatch}: DialogsPropsType) => {

    let dialogsElements = state.dialogs.map((d) => {
        return <Dialog key={d.id} name={d.name} id={d.id}/>
    });

    let messagesElements = state.messages.map((m) => {
        return <Message key={m.id} message={m.message} id={m.id}/>
    });

    const newMessageElement = React.createRef<HTMLTextAreaElement>();
    const sendMessage = () => {
        dispatch(addMessageAC())
    }
    const onMessageChange = () => {
        let text = newMessageElement.current?.value;
        if (text) {
            dispatch(updateNewMessageTextAC(text))
        }
    }

    console.log('render: Dialogs')
    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messagesItems}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea onChange={onMessageChange} ref={newMessageElement} value={newMessageText}/>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;