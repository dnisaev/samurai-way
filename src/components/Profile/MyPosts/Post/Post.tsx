import React from 'react';
import styles from "./Post.module.css";
import {PostType} from "../../../../redux/state";

const Post = ({id, message, likesCount}: PostType) => {
    return (
        <div className={styles.post} id={id}>
            <img src={"https://papirusi.com/assets/images/7be0/7be089687fb94897870523007100d43a.jpg"}
                 alt={"user"}/>
            <div>
                {message}
            </div>
            <div>
                <span>likes {likesCount}</span>
            </div>
        </div>
    );
};

export default Post;