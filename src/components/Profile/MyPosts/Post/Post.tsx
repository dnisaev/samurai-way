import React from 'react';
import style from "./Post.module.css";


type PostType = {
    postMessage: string
}

const Post = ({postMessage}: PostType) => {

    // debugger
    // console.log(props.message)

    return (
        <div className={style.post}>
            <img src={"https://i.pinimg.com/236x/8b/48/e8/8b48e86f54825b8c0e02b132814638af.jpg"} alt={"user-image"}/>
            {postMessage}
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;