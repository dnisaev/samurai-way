import React, { ChangeEvent, useState } from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import defaultAvatar from "../../../assets/images/default-avatar.svg";
import { ProfileType } from "../../../redux/profile-reducer";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import ProfileDataReduxForm from "./ProfileDataForm";
import { ProfileData } from "./ProfileData";

type ProfileInfoType = {
  isOwner: boolean | null;
  profile: ProfileType;
  status: string;
  updateStatusTC: (status: string) => void;
  savePhotoTC: (photo: File) => void;
  saveProfileTC: (profile: any) => void;
};

const ProfileInfo = ({ isOwner, profile, status, updateStatusTC, savePhotoTC, saveProfileTC }: ProfileInfoType) => {
  const [editMode, setEditMode] = useState(false);

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.files?.length && savePhotoTC(e.target.files[0]);
  };

  const onSubmit = async (formData: any) => {
    try {
      await saveProfileTC(formData);
      deactivateEditMode();
    } catch (e) {
      console.log(e);
    }
  };

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
  };

  if (!profile) return <Preloader />;

  const initialValues = {
    aboutMe: profile.aboutMe,
    fullName: profile.fullName,
    lookingForAJob: profile.lookingForAJob,
    lookingForAJobDescription: profile.lookingForAJobDescription
  }

  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <div className={styles.photoWrapper}>
          <img className={styles.avatar} src={profile.photos?.large || defaultAvatar} alt={"avatar-profile"} />
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        </div>
        <div className={styles.descriptionBlock}>
          {editMode ? (
            <ProfileDataReduxForm initialValues={initialValues} profile={profile} onSubmit={onSubmit} />
          ) : (
            <ProfileData profile={profile} isOwner={isOwner} activateEditMode={activateEditMode} />
          )}
          <ProfileStatusWithHooks status={status} updateStatusTC={updateStatusTC} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
