import React from 'react';
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import defaultAvatar from "../../../assets/images/default-avatar.svg";

type ProfileInfoType = {
    profile: {
        photos: {
            large: string
            small: string
        }
        fullName: string
        lookingForAJobDescription: string
    }
}

const ProfileInfo = ({profile}: ProfileInfoType) => {
    console.log('render: ProfileInfo')
    if(!profile){
        return <Preloader/>
    }
    return (
        <div className={styles.content}>
            <div className={styles.wrapper}>
                <img className={styles.avatar}
                     src={profile.photos.large ? profile.photos.large : defaultAvatar}
                     alt={'avatar-profile'}
                />
                <div className={styles.descriptionBlock}>
                    <h2>{profile.fullName}</h2>
                    <p>{profile.lookingForAJobDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;