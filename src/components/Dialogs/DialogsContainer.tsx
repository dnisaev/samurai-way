import React from 'react'
import {addMessageAC, DialogsActionsType, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {ReducersType} from "../../redux/redux-store";

type DialogsPropsType = {
    state: ReducersType
    dispatch: (action: DialogsActionsType) => void
}

const DialogsContainer = ({state, dispatch}: DialogsPropsType) => {

    const dialogsPageState = state.dialogsPage

    const sendMessage = () => {
        dispatch(addMessageAC())
    }
    const updateNewMessageText = (text: string) => {
        if (text) {
            dispatch(updateNewMessageTextAC(text))
        }
    }

    // console.log('render: Dialogs')
    return (
        <Dialogs state={dialogsPageState}
                 sendMessage={sendMessage}
                 updateNewMessageText={updateNewMessageText}
        />
    );
};

export default DialogsContainer;