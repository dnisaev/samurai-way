import React from 'react'
import {addMessageAC, DialogsActionsType, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {ReducersType} from "../../redux/redux-store";
import {StoreContext} from "../../StoreContext";

type DialogsPropsType = {
    state?: ReducersType
    dispatch?: (action: DialogsActionsType) => void
}

const DialogsContainer = ({}: DialogsPropsType) => {

    // console.log('render: Dialogs')
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const dialogsPageState = store.getState().dialogsPage
                    const sendMessage = () => {
                        store.dispatch(addMessageAC())
                    }
                    const updateNewMessageText = (text: string) => {
                        if (text) {
                            store.dispatch(updateNewMessageTextAC(text))
                        }
                    }
                    return <Dialogs state={dialogsPageState}
                                    sendMessage={sendMessage}
                                    updateNewMessageText={updateNewMessageText}
                    />
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;