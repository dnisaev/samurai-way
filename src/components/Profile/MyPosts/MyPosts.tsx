import React from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionsType, PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const MyPosts = ({posts, newPostText, dispatch}: MyPostsPropsType) => {

    const postMessagesElements = posts.map((m) => {
        return <Post key={m.id} message={m.message} likesCount={m.likesCount} id={m.id}/>
    });
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const onAddPostClick = () => {
            dispatch({type: "ADD-POST"})
    }
    const onPostChange = () => {
        let text = newPostElement.current?.value;
        if (text) {
            dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text});
        }
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/>
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