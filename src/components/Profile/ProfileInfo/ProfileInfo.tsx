import React from 'react';
import styles from "./ProfileInfo.module.css";
import defaultAvatar from "./../../../assets/images/default-avatar.svg";

const ProfileInfo = () => {
    console.log('render: ProfileInfo')
    return (
        <div className={styles.content}>
            <div className={styles.wrapper}>
                <img className={styles.avatar}
                     src={defaultAvatar}
                     alt={'avatar-profile'}
                />
                <div className={styles.descriptionBlock}>
                    <h2>Дмитрий Исаев</h2>
                    <p>Frontend developer</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;