import React from "react";
import styles from "./Post.module.css";
import { PostType } from "../../../../redux/profile-reducer";
import defaultAvatar from "./../../../../assets/images/default-avatar.svg";

const Post = ({ id, message, likesCount, photos }: PostType) => {
  return (
    <div className={styles.post} id={id}>
      <img src={photos.large || defaultAvatar} alt={"user"} />
      <div>{message}</div>
      <div className={styles.likes}>
        <span>Нравится: {likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
