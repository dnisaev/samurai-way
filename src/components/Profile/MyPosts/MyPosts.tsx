import React from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionsType, addPostAC, PostType, updateNewPostTextAC} from "../../../redux/state";

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
            dispatch(addPostAC())
    }
    const onPostChange = () => {
        let text = newPostElement.current?.value;
        if (text) {
            dispatch(updateNewPostTextAC(text));
        }
    }

    return (
        <div className={styles.postsBlock}>
            <h3>Мои посты</h3>
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