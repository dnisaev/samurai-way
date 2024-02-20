import {addMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import {ReducersType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state: ReducersType) => {
    return {
        state: state.dialogsPage
    }
}

const AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(AuthRedirectComponent);

export default DialogsContainer;