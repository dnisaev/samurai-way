import React from "react";
import styles from "./ProfileInfo.module.css";

export const ProfileData = ({ profile, isOwner, activateEditMode }: any) => {
  return (
    <div className={styles.profileDataBlock}>
      {isOwner && <button onClick={activateEditMode}>Редактировать</button>}
      <h2>{profile.fullName}</h2>
      <div>
        <strong>Ищу работу</strong>: {profile.lookingForAJob ? "Да" : "Нет"}
      </div>
      <div>
        <strong>Навыки</strong>: {profile.lookingForAJobDescription}
      </div>
      <div>
        <strong>Обо мне</strong>: {profile.aboutMe}
      </div>
      <div>
        <div>
          <strong>Контакты</strong>:{" "}
          {Object.keys(profile.contacts).map((key) => {
            return profile.contacts[key] ? (
              <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            ) : (
              ""
            );
          })}
        </div>
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
