import React from 'react';
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profile: any
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