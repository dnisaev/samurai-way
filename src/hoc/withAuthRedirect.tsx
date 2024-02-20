import React from 'react';
import {Redirect} from "react-router-dom";
import {ReducersType} from "../redux/redux-store";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state: ReducersType) =>
    ({isAuth: state.auth.isAuth});

export const withAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
};