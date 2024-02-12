import React from 'react';
import {connect} from "react-redux";
import axios from "axios";
import Header from "./Header";
import {ReducersType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";

type AuthAPIPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<AuthAPIPropsType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
                headers: {"API-KEY" : "bb82ba3c-ed1e-4248-bb07-d52f74e8ed63"}
            })
            .then(response => {
                console.log(response)
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data;
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