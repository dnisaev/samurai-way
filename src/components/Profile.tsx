import React from 'react';

const Profile = () => {
    return (
        <div className={'content'}>
            <div>
                <img
                    src={'https://papik.pro/uploads/posts/2023-02/1675660612_papik-pro-p-sotsialnii-risunok-11.jpg'}
                    alt={'main-social'} width={'100%'}/>
            </div>
            <div>
                Avatar + Description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;