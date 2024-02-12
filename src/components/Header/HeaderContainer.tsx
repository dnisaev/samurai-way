import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {ReducersType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

type AuthAPIPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<AuthAPIPropsType> {
    componentDidMount() {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render() {
        console.log('render: HeaderContainer')
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: ReducersType) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);