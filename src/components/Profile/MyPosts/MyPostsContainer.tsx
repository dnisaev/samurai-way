import { addPost, } from "../../../redux/profile-reducer";
import { MyPosts } from "./MyPosts";
import { AppRootStateType } from "../../../redux/redux-store";
import { connect } from "react-redux";


const mapStateToProps = (state: AppRootStateType) => {
  return {
    posts: state.profilePage.posts,
    photos: state.profilePage.profile.photos
  };
};

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);

export default MyPostsContainer;
