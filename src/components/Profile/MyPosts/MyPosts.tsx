import React from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsPropsType} from "../../../index";

const MyPosts = ({postsData}: PostsPropsType) => {

    let postMessagesElements = postsData.map((m)=>{
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