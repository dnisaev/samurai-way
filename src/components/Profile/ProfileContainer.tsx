import React from 'react';
import styles from "./Profile.module.css";
import Profile from './Profile';
import {connect} from "react-redux";
import {getProfileTC, ProfileType} from "../../redux/profile-reducer";
import {ReducersType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "30560"
        }
        this.props.getProfileTC(userId)
    }

    render() {
        console.log('render: ProfileContainer')

        return (
            <div className={styles.content}>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}

const mapStateToProps = (state: ReducersType): MapStatePropsType =>
    ({profile: state.profilePage.profile});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileTC}),
    withRouter
)(ProfileContainer)

type MapStatePropsType = {
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    getProfileTC: (userId: string) => void
}
type PathParamsType = {
    userId: string
}
type ProfileContainerPropsType =
    RouteComponentProps<PathParamsType>
    & MapStatePropsType
    & MapDispatchPropsType