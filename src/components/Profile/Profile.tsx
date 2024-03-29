import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileType } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";

type ProfilePropsType = {
  isOwner: boolean | null;
  profile: ProfileType;
  status: string;
  updateStatusTC: (status: string) => void;
  savePhotoTC: (photo: File) => void;
  saveProfileTC: (profile: any) => void;
};

const Profile = ({ isOwner, profile, status, updateStatusTC, savePhotoTC, saveProfileTC }: ProfilePropsType) => {
  if (!profile) return <Preloader />;

  return (
    <div className={styles.content}>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatusTC={updateStatusTC}
        savePhotoTC={savePhotoTC}
        saveProfileTC={saveProfileTC}
        isOwner={isOwner}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
