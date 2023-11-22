import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src={'https://papik.pro/uploads/posts/2023-02/1675660612_papik-pro-p-sotsialnii-risunok-11.jpg'}
                    alt={'main-social'} width={'100%'}/>
            </div>
            <div>
                Avatar + Description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;