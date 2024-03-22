import React, { ChangeEvent } from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileType } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";

type ProfilePropsType = {
  isOwner: boolean | null
  profile: ProfileType
  status: string
  updateStatusTC: (status: string) => void
  savePhotoTC: (photo: File) => void
};

const Profile = ({ isOwner, profile, status, updateStatusTC, savePhotoTC }: ProfilePropsType) => {

  if (!profile) return <Preloader/>

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.files?.length && savePhotoTC(e.target.files[0])
  }

  return (
    <div className={styles.content}>
      <ProfileInfo profile={profile} status={status} updateStatusTC={updateStatusTC} />
      { isOwner && <input type={"file"} onChange={onMainPhotoSelected} /> }
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
