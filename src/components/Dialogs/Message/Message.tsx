import React from 'react';
import styles from "./../Dialogs.module.css";
import {MessageType} from "../../../redux/store";

const Message = ({id, message}: MessageType) => {
    console.log('render: Message')
    return <div id={id} className={styles.message}>{message}</div>
}
export default Message;