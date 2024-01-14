import React from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const MyPosts = ({posts, newPostText, addPost, updateNewPostText}: MyPostsPropsType) => {

    const postMessagesElements = posts.map((m) => {
        return <Post key={m.id} message={m.message} likesCount={m.likesCount} id={m.id}/>
    });
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const onAddPostClick = () => {
        addPost()
    }
    const onPostChange = () => {
        let text = newPostElement.current?.value;
        if (text) {
            updateNewPostText(text);
        }
    }
    // console.log('render: MyPosts')
    return (
        <div className={styles.postsBlock}>
            <h3>Мои посты</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPostClick}>Отправить</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postMessagesElements}
            </div>
        </div>
    );
};

export default MyPosts;