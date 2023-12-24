import React from 'react';
import styles from "./../Dialogs.module.css";
import {MessageType} from "../../../redux/state";

const Message = ({id, message}: MessageType) => {
    return <div id={id} className={styles.message}>{message}</div>
}
export default Message;