import React from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {v1} from "uuid";


const MyPosts = () => {
    const postMessagesData = [
        {id: v1(), message: 'Hi, there!', likesCount: 15},
        {id: v1(), message: 'Hello, everyone!', likesCount: 35}
    ];

    let postMessagesElements = postMessagesData.map((m)=>{
        return <Post key={m.id} message={m.message} likesCount={m.likesCount}/>
    });

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postMessagesElements}
            </div>
        </div>
    );
};

export default MyPosts;