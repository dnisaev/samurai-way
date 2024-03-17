import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import defaultAvatar from "../../../assets/images/default-avatar.svg";
import { ProfileType } from "../../../redux/profile-reducer";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";

type ProfileInfoType = {
  profile: ProfileType | null;
  status: string;
  updateStatusTC: (status: string) => void;
};

const ProfileInfo = ({ profile, status, updateStatusTC }: ProfileInfoType) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <img
          className={styles.avatar}
          src={profile.photos?.large ? profile.photos.large : defaultAvatar}
          alt={"avatar-profile"}
        />
        <div className={styles.descriptionBlock}>
          <h2>{profile.fullName}</h2>
          <p>{profile.lookingForAJobDescription}</p>
          <ProfileStatusWithHooks status={status} updateStatusTC={updateStatusTC} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
