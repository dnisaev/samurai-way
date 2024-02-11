import React from 'react';
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

type ProfileInfoType = {
    profile: any
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
                     src={profile.photos.large}
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