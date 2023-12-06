import React from 'react';
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={style.content}>
            <div>
                <img
                    src={'https://papik.pro/uploads/posts/2023-02/1675660612_papik-pro-p-sotsialnii-risunok-11.jpg'}
                    alt={'main-social'} width={'100%'}/>
            </div>
            <div className={style.descriptionBlock}>
                Avatar + Description
            </div>
        </div>
    );
};

export default ProfileInfo;