import {addMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import {ReducersType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";

const mapStateToProps = (state: ReducersType) => {
    return {
        state: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(Dialogs);

export default DialogsContainer;