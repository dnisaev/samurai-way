import React from 'react';
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    console.log('render: Profile')
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;