import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileType } from "../../redux/profile-reducer";

type ProfilePropsType = {
  profile: ProfileType | null;
  status: string;
  updateStatusTC: (status: string) => void;
};

const Profile = ({ profile, status, updateStatusTC }: ProfilePropsType) => {
  console.log("render: Profile");
  return (
    <div className={styles.content}>
      <ProfileInfo profile={profile} status={status} updateStatusTC={updateStatusTC} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
