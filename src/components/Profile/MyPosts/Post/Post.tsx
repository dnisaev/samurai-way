import React from 'react';
import styles from "./Post.module.css";
import {PostType} from "../../../../redux/store";

const Post = ({id, message, likesCount}: PostType) => {
    console.log('render: Post')
    return (
        <div className={styles.post} id={id}>
            <img src={"https://papirusi.com/assets/images/7be0/7be089687fb94897870523007100d43a.jpg"}
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