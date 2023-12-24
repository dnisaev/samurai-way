import React from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}

const MyPosts = ({posts, addPost}: MyPostsPropsType) => {

    const postMessagesElements = posts.map((m) => {
        return <Post key={m.id} message={m.message} likesCount={m.likesCount} id={m.id}/>
    });
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const onAddPostClick = () => {
        let text = newPostElement.current?.value;
        if (text) {
            addPost(text);
        }
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={onAddPostClick}>add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postMessagesElements}
            </div>
        </div>
    );
};

export default MyPosts;