import React from 'react';
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    // console.log('render: ProfileInfo')
    return (
        <div className={styles.content}>
            <div className={styles.wrapper}>
                <img className={styles.avatar}
                     src={'https://papirusi.com/assets/images/7be0/7be089687fb94897870523007100d43a.jpg'}
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