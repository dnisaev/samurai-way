import React from 'react';
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import defaultAvatar from "../../../assets/images/default-avatar.svg";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoType = {
    profile: ProfileType | null
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
                     src={profile.photos?.large ? profile.photos.large : defaultAvatar}
                     alt={'avatar-profile'}
                />
                <div className={styles.descriptionBlock}>
                    <h2>{profile.fullName}</h2>
                    <p>{profile.lookingForAJobDescription}</p>
                    <ProfileStatus status={'Hello everybody!'}/>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;