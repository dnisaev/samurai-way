import React from 'react';
import styles from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/state";

const Dialog = ({name, id}: DialogType) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={`/dialogs/${id}`} activeClassName={styles.active}>{name}</NavLink>
        </div>
    )
}
export default Dialog;