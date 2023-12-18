import React from 'react';
import styles from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogDataPropsType = {
    id: string
    name: string
}
const Dialog = ({name, id}: DialogDataPropsType) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={`/dialogs/${id}`} activeClassName={styles.active}>{name}</NavLink>
        </div>
    )
}
export default Dialog;