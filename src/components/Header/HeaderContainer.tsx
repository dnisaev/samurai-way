import React from 'react';
import {connect} from "react-redux";
import {ReducersType} from "../../redux/redux-store";
import {getAuthUserDataTC} from "../../redux/auth-reducer";
import {Header} from "./Header";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserDataTC()
    }

    render() {
        console.log('render: HeaderContainer')
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: ReducersType): MapStatePropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {getAuthUserDataTC})(HeaderContainer);

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    getAuthUserDataTC: () => void
}
type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType