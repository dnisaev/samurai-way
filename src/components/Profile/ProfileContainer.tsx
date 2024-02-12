import React from 'react';
import styles from "./Profile.module.css";
import Profile from './Profile';
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {ReducersType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";

type ProfileAPIPropsType = {

}

class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = "30560"
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then(response => {
                if (response.data.items[0].id < +userId) {
                    userId = "30560"
                }
                axios
                    .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                    .then(response => {
                        this.props.setUserProfile(response.data);
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