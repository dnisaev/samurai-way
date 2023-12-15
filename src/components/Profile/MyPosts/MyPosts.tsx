import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {v1} from "uuid";


const MyPosts = () => {
    const postMessagesData = [
        {id: v1(), message: 'Hi, there!'},
        {id: v1(), message: 'Hello, everyone!'}
    ];
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message={postMessagesData[0].message}/>
                <Post message={postMessagesData[1].message}/>
            </div>
        </div>
    );
};

export default MyPosts;