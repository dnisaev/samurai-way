import React from 'react';
import './App.css';

function App() {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img src={"https://img.artlebedev.ru/everything/russia-logo/russia-logo.gif"} alt={"logo"}
                     width={"100px"}/>
            </header>
            <nav className={'nav'}>
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
            </nav>
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
        </div>
    );
}

export default App;
