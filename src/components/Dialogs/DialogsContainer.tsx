import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {ActionsType, ReducersType} from "../../redux/redux-store";
import {connect} from "react-redux";

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

export default DialogsContainer;