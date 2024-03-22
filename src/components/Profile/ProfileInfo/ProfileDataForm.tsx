import React from "react";
import { createField, Input } from "../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";

const ProfileDataForm = (props: any) => {
  return (
    <form>
      <button onClick={()=>{}}>Сохранить</button>
      <p>
        <strong>Полное имя</strong>: {createField("Full name", "fullName", [], Input)}
      </p>
      <p>
        <strong>Ищу работу</strong>:
      </p>
      <p>
        <strong>Навыки</strong>:
      </p>
      <p>
        <strong>Обо мне</strong>:
      </p>
      {/*<div>*/}
      {/*  <p>*/}
      {/*    <strong>Контакты</strong>:{" "}*/}
      {/*    {Object.keys(profile.contacts).map((key) => {*/}
      {/*      return profile.contacts[key] ?*/}
      {/*        <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} /> : '';*/}
      {/*    })}*/}
      {/*  </p>*/}
      {/*</div>*/}
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm