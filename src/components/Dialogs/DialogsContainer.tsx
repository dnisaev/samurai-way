import {addMessage} from "../../redux/dialogs-reducer";
import {ReducersType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
//import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";

const mapStateToProps = (state: ReducersType) => {
    return {
        state: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addMessage}),
    //withAuthRedirect
)(Dialogs)