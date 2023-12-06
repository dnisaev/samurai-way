import React from 'react';
import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsType = {

}

type DialogType = {
    name: string
    id: string
}

type dialogMessageType = {
    dialogMessage: string
}

const Dialog = ({name, id}: DialogType) => {
    return (
        <div className={style.dialog}>
            <NavLink to={`/dialogs/${id}`} activeClassName={style.active}>{name}</NavLink>
        </div>
    )
}

const Message = ({dialogMessage}: dialogMessageType) => {
    return <div className={style.message}>{dialogMessage}</div>
}

const Dialogs = ({}: DialogsType) => {
    return (
        <div className={style.dialogsWrapper}>
            <div className={style.dialogsItems}>
                <Dialog name={'Dmitriy'}
                        id={'01'}/>
                <Dialog name={'Anya'}
                        id={'02'}/>
                <Dialog name={'Sveta'}
                        id={'03'}/>
                <Dialog name={'Mama'}
                        id={'04'}/>
                <Dialog name={'Papa'}
                        id={'05'}/>
                <Dialog name={'Andrey'}
                        id={'06'}/>
            </div>
            <div className={style.messagesItems}>
                <Message dialogMessage={'Hello'}/>
                <Message dialogMessage={'Hi'}/>
                <Message dialogMessage={'How are you?'}/>
            </div>
        </div>
    );
};

export default Dialogs;