import React from 'react';
import styles from "./Profile.module.css";
import Profile from './Profile';
import {connect} from "react-redux";
import {getProfileTC, ProfileType} from "../../redux/profile-reducer";
import {ReducersType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "30560"
        }
       this.props.getProfileTC(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        console.log('render: ProfileContainer')

        return (
            <div className={styles.content}>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}

const mapStateToProps = (state: ReducersType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getProfileTC})(WithUrlDataContainer);

type MapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    getProfileTC: (userId: string) => void
}
type PathParamsType = {
    userId: string
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & MapDispatchPropsType