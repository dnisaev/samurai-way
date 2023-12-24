import React from 'react';
import styles from "./Post.module.css";
import {PostType} from "../../../../redux/state";

const Post = ({id, message, likesCount}: PostType) => {
    return (
        <div className={styles.post} id={id}>
            <img src={"https://i.pinimg.com/236x/8b/48/e8/8b48e86f54825b8c0e02b132814638af.jpg"}
                 alt={"user"}/>
            {message}
            <div>
                <span>likes {likesCount}</span>
            </div>
        </div>
    );
};

export default Post;