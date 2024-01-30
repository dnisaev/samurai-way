import React from 'react';
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    console.log('render: ProfileInfo')
    return (
        <div className={styles.content}>
            <div className={styles.wrapper}>
                <img className={styles.avatar}
                     src={'https://www.svgrepo.com/show/1356/man.svg'}
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