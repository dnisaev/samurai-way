import React from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";

const MyPosts = ({posts}: ProfilePageType) => {

    let postMessagesElements = posts.map((m)=>{
        return <Post key={m.id} message={m.message} likesCount={m.likesCount} id={m.id}/>
    });
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        let text = newPostElement.current?.value;
        console.log(text);
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postMessagesElements}
            </div>
        </div>
    );
};

export default MyPosts;