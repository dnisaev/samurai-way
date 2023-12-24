import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    addPost: (postMessage: string) => void
}

const Profile = ({state, addPost}: ProfilePropsType) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts posts={state.posts} addPost={addPost}/>
        </div>
    );
};

export default Profile;