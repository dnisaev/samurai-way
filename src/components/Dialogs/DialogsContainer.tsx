// import React from 'react'
// import {Legacy_StoreContext} from "../../redux/legacy_StoreContext";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {ActionsType, ReducersType} from "../../redux/redux-store";
import {connect} from "react-redux";

// type DialogsPropsType = {
//     state?: ReducersType
//     dispatch?: (action: DialogsActionsType) => void
// }

const mapStateToProps = (state: ReducersType) => {
    return {
        state: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        sendMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessageText: (text: string) => {
            if (text) {
                dispatch(updateNewMessageTextAC(text))
            }
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

// const Legacy_DialogsContainer = ({}: DialogsPropsType) => {
//
//     // console.log('render: Dialogs')
//     return (
//         <Legacy_StoreContext.Consumer>
//             {
//                 (store) => {
//                     const dialogsPageState = store.getState().dialogsPage
//                     const sendMessage = () => {
//                         store.dispatch(addMessageAC())
//                     }
//                     const updateNewMessageText = (text: string) => {
//                         if (text) {
//                             store.dispatch(updateNewMessageTextAC(text))
//                         }
//                     }
//                     return <Dialogs state={dialogsPageState}
//                                     sendMessage={sendMessage}
//                                     updateNewMessageText={updateNewMessageText}
//                     />
//                 }
//             }
//         </Legacy_StoreContext.Consumer>
//     );
// };

export default DialogsContainer;