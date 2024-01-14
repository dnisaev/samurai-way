import React from 'react';
import {addPostAC, ProfileActionsType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ReducersType} from "../../../redux/redux-store";
import {StoreContext} from "../../../StoreContext";

type MyPostsPropsType = {
    state?: ReducersType
    dispatch?: (action: ProfileActionsType) => void
}

const MyPostsContainer = ({}: MyPostsPropsType) => {

    // console.log('render: MyPostsContainer')
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const profilePageState = store.getState().profilePage;

                    const addPost = () => {
                        const action = addPostAC()
                        store.dispatch(action)
                    }
                    const updateNewPostText = (text: string) => {
                        if (text) {
                            const action = updateNewPostTextAC(text)
                            store.dispatch(action);
                        }
                    }
                    return <MyPosts posts={profilePageState.posts}
                                    newPostText={profilePageState.newPostText}
                                    addPost={addPost}
                                    updateNewPostText={updateNewPostText}/>
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;