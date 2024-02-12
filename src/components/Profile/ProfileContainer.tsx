import React from 'react';
import styles from "./Profile.module.css";
import Profile from './Profile';
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {ReducersType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";
import {profileAPI, usersAPI} from "../../api/api";

type ProfileAPIPropsType = {}

class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "30560"
        }
        usersAPI.getUsers().then(data => {
            if (data.items[0].id < +userId) {
                userId = "30560"
            }
            profileAPI.getProfile(userId).then(data => {
                this.props.setUserProfile(data);
            })
        })
    }

    render() {
        console.log('render: ProfileContainer')
        return (
            <div className={styles.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

const mapStateToProps = (state: ReducersType) => {
    return {
        profile: state.profilePage.profile
    }
}

const WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainer);