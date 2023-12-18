import React from 'react';
import style from "./Post.module.css";


type PostMessageType = {
    id?: string
    message: string
    likesCount: number
}

const Post = ({message, likesCount}: PostMessageType) => {
    return (
        <div className={style.post}>
            <img src={"https://i.pinimg.com/236x/8b/48/e8/8b48e86f54825b8c0e02b132814638af.jpg"} alt={"user-image"}/>
            {message}
            <div>
                <span>like {likesCount}</span>
            </div>
        </div>
    );
};

export default Post;