import React from 'react';
import styles from "./../Dialogs.module.css";

type DialogMessagePropsType = {
    id?: string
    message: string
}
const Message = ({message}: DialogMessagePropsType) => {
    return <div className={styles.message}>{message}</div>
}
export default Message;