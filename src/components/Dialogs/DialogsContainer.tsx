import {addMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {ReducersType} from "../../redux/redux-store";
import {connect} from "react-redux";

const mapStateToProps = (state: ReducersType) => {
    return {
        state: state.dialogsPage
    }
}

// const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
//     return {
//         sendMessage: () => {
//             dispatch(addMessage())
//         },
//         updateNewMessageText: (text: string) => {
//             if (text) {
//                 dispatch(updateNewMessageText(text))
//             }
//         }
//     }
// }

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(Dialogs);

export default DialogsContainer;