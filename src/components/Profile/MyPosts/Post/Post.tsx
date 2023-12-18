import React from 'react';
import styles from "./Post.module.css";

type PostMessagePropsType = {
    id?: string
    message: string
    likesCount: number
}
const Post = ({message, likesCount}: PostMessagePropsType) => {
    return (
        <div className={styles.post}>
            <img src={"https://i.pinimg.com/236x/8b/48/e8/8b48e86f54825b8c0e02b132814638af.jpg"} alt={"user-image"}/>
            {message}
            <div>
                <span>like {likesCount}</span>
            </div>
        </div>
    );
};

export default Post;