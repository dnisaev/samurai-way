import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsPropsType} from "../../index";

const Profile = ({postsData}: PostsPropsType) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts postsData={postsData} />
        </div>
    );
};

export default Profile;