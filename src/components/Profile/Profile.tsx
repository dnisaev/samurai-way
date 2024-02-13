import React from 'react';
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
}

const Profile = ({profile}: ProfilePropsType) => {
    console.log('render: Profile')
    return (
        <div className={styles.content}>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;