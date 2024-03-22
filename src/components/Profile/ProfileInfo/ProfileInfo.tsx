import React, { ChangeEvent, useState } from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import defaultAvatar from "../../../assets/images/default-avatar.svg";
import { ProfileType } from "../../../redux/profile-reducer";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import ProfileDataFormReduxForm from "./ProfileDataForm";

type ProfileInfoType = {
  isOwner: boolean | null;
  profile: ProfileType;
  status: string;
  updateStatusTC: (status: string) => void;
  savePhotoTC: (photo: File) => void;
};

const ProfileInfo = ({ isOwner, profile, status, updateStatusTC, savePhotoTC }: ProfileInfoType) => {

  const [editMode, setEditMode] = useState(false);

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.files?.length && savePhotoTC(e.target.files[0]);
  };

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
  }

  if (!profile) return <Preloader />;

  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <div className={styles.photoWrapper}>
          <img className={styles.avatar} src={profile.photos?.large || defaultAvatar} alt={"avatar-profile"} />
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        </div>
        <div className={styles.descriptionBlock}>
          {editMode
            ? <ProfileDataFormReduxForm/>
            : <ProfileData
              profile={profile}
              isOwner={isOwner}
              activateEditMode={activateEditMode}
              deactivateEditMode={deactivateEditMode}/>}
          <ProfileStatusWithHooks status={status} updateStatusTC={updateStatusTC} />
        </div>
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, activateEditMode, deactivateEditMode }: any) => {
  return (
    <div>
      {isOwner && <button onClick={activateEditMode} onBlur={deactivateEditMode}>Редактировать</button>}
      <h2>{profile.fullName}</h2>
      <p>
        <strong>Ищу работу</strong>: {profile.lookingForAJob ? "Да" : "Нет"}
      </p>
      <p>
        <strong>Навыки</strong>: {profile.lookingForAJobDescription}
      </p>
      <p>
        <strong>Обо мне</strong>: {profile.lookingForAJobDescription}
      </p>
      <div>
        <p>
          <strong>Контакты</strong>:{" "}
          {Object.keys(profile.contacts).map((key) => {
            return profile.contacts[key] ? <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} /> : '';
          })}
        </p>
      </div>
    </div>
  );
};

const Contacts = ({ contactTitle, contactValue }: ContactsPropsType) => {
  return (
    { contactValue } && (
      <span>
        <b>{contactTitle}</b>: {contactValue}
      </span>
    )
  );
};

type ContactsPropsType = {
  contactTitle: string;
  contactValue: string;
};

export default ProfileInfo;
