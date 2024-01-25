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

export default MyPostsContainer;