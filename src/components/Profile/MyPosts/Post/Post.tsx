import React from 'react';
import styles from "./Post.module.css";
import {PostType} from "../../../../redux/profile-reducer";

const Post = ({id, message, likesCount}: PostType) => {
    console.log('render: Post')
    return (
        <div className={styles.post} id={id}>
            <img src={"https://www.svgrepo.com/show/1356/man.svg"}
                 alt={"user"}/>
            <div>
                {message}
            </div>
            <div className={styles.likes}>
                <span>Нравится: {likesCount}</span>
            </div>
        </div>
    );
};

export default Post;