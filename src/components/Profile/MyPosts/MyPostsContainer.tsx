import React from 'react';
import {addPostAC, ProfileActionsType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ReducersType} from "../../../redux/redux-store";

type MyPostsPropsType = {
    state: ReducersType
    dispatch: (action: ProfileActionsType) => void
}

const MyPostsContainer = ({state, dispatch}: MyPostsPropsType) => {

    const profilePageState = state.profilePage;

    const addPost = () => {
            const action = addPostAC()
            dispatch(action)
    }
    const updateNewPostText = (text: string) => {
        if (text) {
            const action = updateNewPostTextAC(text)
            dispatch(action);
        }
    }
    // console.log('render: MyPostsContainer')
    return (
        <MyPosts posts={profilePageState.posts}
                 newPostText={profilePageState.newPostText}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}/>
    );
};

export default MyPostsContainer;