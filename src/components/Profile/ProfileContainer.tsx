import React from 'react';
import styles from "./Profile.module.css";
import Profile from './Profile';
import {connect} from "react-redux";
import {getProfileTC, getStatusTC, ProfileType, updateStatusTC} from "../../redux/profile-reducer";
import {ReducersType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "30560"
        }
        this.props.getProfileTC(userId);
        this.props.getStatusTC(userId);
    }

    render() {
        console.log('render: ProfileContainer')
        return (
            <div className={styles.content}>
                <Profile profile={this.props.profile}
                         status={this.props.status}
                         updateStatusTC={this.props.updateStatusTC}/>
            </div>
        );
    }
}

const mapStateToProps = (state: ReducersType): MapStatePropsType =>
    ({
        profile: state.profilePage.profile,
        status: state.profilePage.status
    });

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileTC, getStatusTC, updateStatusTC}),
    withRouter
)(ProfileContainer)

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
}
type MapDispatchPropsType = {
    getProfileTC: (userId: string) => void
    getStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
}
type PathParamsType = {
    userId: string
}
type ProfileContainerPropsType =
    RouteComponentProps<PathParamsType>
    & MapStatePropsType
    & MapDispatchPropsType