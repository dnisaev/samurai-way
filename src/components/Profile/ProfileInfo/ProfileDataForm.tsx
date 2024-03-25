import React from "react";
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";
import styles from "./ProfileInfo.module.css";
import { required } from "../../../utils/validators/validators";

const ProfileDataForm = ({ handleSubmit, profile, error }: any) => {

  return (
    <form onSubmit={handleSubmit} className={styles.profileDataFormBlock}>
      <button>Сохранить</button>
      {error && <div className={styles.formSummeryError}>{error}</div>}
      <div>
        <strong>Полное имя</strong>: {createField("Введите имя", "fullName", [required], Input)}
      </div>
      <div>
        <strong>Ищу работу</strong>: {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <strong>Навыки</strong>: {createField("Укажите навыки", "lookingForAJobDescription", [required], Textarea)}
      </div>
      <div>
        <strong>Обо мне</strong>: {createField("Опишите себя", "aboutMe", [required], Textarea)}
      </div>
      <>
        <strong>Контакты</strong>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              {key}: {createField(key, `contacts.${key}`, [], Input)}
            </div>
          );
        })}
      </>
    </form>
  );
};

const ProfileDataReduxForm: any = reduxForm<any>({ form: "edit-profile", enableReinitialize: true, destroyOnUnmount: false})(ProfileDataForm);

export default ProfileDataReduxForm;

// export type ProfileDataFormPropsType = {
//   profile: ProfileType
// }
//
// export type ProfileFormDataType = {
//   fullName: string;
//   lookingForAJob: boolean;
//   lookingForAJobDescription: string;
//   aboutMe: string;
// };
