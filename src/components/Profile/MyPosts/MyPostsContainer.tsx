// import React from 'react';
// import {Legacy_StoreContext} from "../../../redux/legacy_StoreContext";
// import {addMessageAC, updateNewMessageTextAC} from "../../../redux/dialogs-reducer";
// import Dialogs from "../../Dialogs/Dialogs";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ActionsType, ReducersType} from "../../../redux/redux-store";
import {connect} from "react-redux";

const mapStateToProps = (state: ReducersType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        addPost: () => {
            const action = addPostAC()
            dispatch(action)
        },
        updateNewPostText: (text: string) => {
            if (text) {
                const action = updateNewPostTextAC(text)
                dispatch(action);
            }
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

// const Legacy_MyPostsContainer = ({}: MyPostsPropsType) => {
//
//     // console.log('render: MyPostsContainer')
//     return (
//         <Legacy_StoreContext.Consumer>
//             {
//                 (store) => {
//                     const profilePageState = store.getState().profilePage;
//
//                     const addPost = () => {
//                         const action = addPostAC()
//                         store.dispatch(action)
//                     }
//                     const updateNewPostText = (text: string) => {
//                         if (text) {
//                             const action = updateNewPostTextAC(text)
//                             store.dispatch(action);
//                         }
//                     }
//                     return <MyPosts posts={profilePageState.posts}
//                                     newPostText={profilePageState.newPostText}
//                                     addPost={addPost}
//                                     updateNewPostText={updateNewPostText}/>
//                 }
//             }
//         </Legacy_StoreContext.Consumer>
//     );
// };

export default MyPostsContainer;