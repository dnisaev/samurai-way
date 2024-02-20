import React from 'react';
import {Redirect} from "react-router-dom";
import {ReducersType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: ReducersType): MapStatePropsType =>
    ({isAuth: state.auth.isAuth});

export const withAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component<MapStatePropsType> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(RedirectComponent)
};