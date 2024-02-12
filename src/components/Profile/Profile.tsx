import React from 'react';
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profile: {
        photos: {
            large: string
            small: string
        }
        fullName: string
        lookingForAJobDescription: string
    }
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