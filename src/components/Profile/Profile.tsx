import React from 'react';
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ReducersType} from "../../redux/redux-store";
import {ProfileActionsType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    state: ReducersType
    dispatch: (action: ProfileActionsType) => void
}

const Profile = ({state, dispatch}: ProfilePropsType) => {
    // console.log('render: Profile')
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPostsContainer state={state}
                              dispatch={dispatch}/>
        </div>
    );
};

export default Profile;