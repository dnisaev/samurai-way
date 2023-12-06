import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post postMessage={"Hi, there!"}/>
                <Post postMessage={"Hello, everyone!"}/>
            </div>
        </div>
    );
};

export default MyPosts;