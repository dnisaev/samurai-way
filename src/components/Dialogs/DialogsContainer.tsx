import {addMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import {ReducersType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state: ReducersType) => {
    return {
        state: state.dialogsPage
    }
}

export default compose(
    connect(mapStateToProps, {addMessage, updateNewMessageText}),
    withAuthRedirect
)(Dialogs)