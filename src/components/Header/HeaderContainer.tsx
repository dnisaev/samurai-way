import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {getAuthUserDataTC, logoutTC} from "../../redux/auth-reducer";
import {Header} from "./Header";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserDataTC()
    }

    render() {
        console.log('render: HeaderContainer')
        return <Header login={this.props.login}
                       logout={this.props.logoutTC}
                       isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {getAuthUserDataTC, logoutTC})(HeaderContainer);

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    getAuthUserDataTC: () => void
    logoutTC: () => void
}
type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType