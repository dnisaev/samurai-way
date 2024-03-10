import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { DialogsStateType } from "redux/dialogs-reducer";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "utils/validators/validators";
// import {Redirect} from "react-router-dom";

export const Dialogs = ({ state, addMessage }: DialogsPropsType) => {
  let dialogsElements = state.dialogs.map((d) => {
    return <Dialog key={d.id} name={d.name} id={d.id} />;
  });
  let messagesElements = state.messages.map((m) => {
    return <Message key={m.id} message={m.message} id={m.id} />;
  });

  const addNewMessage = (values: AddMessageFormType) => {
    addMessage(values.newMessageBody);
  };

  //if (!isAuth) return <Redirect to={"/login"}/>

  console.log("render: Dialogs");

  return (
    <div className={styles.dialogsWrapper}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messagesItems}>
        <div>{messagesElements}</div>
        <div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
  const maxLength = maxLengthCreator(10);

  console.log("render: AddMessageForm");

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"newMessageBody"}
          placeholder={"Введите сообщение"}
          validate={[required, maxLength]}
        />
      </div>
      <div>
        <button>Отправить</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm<AddMessageFormType>({
  form: "dialogAddMessageForm",
})(AddMessageForm);

type AddMessageFormType = {
  newMessageBody: string;
};
type DialogsPropsType = {
  state: DialogsStateType;
  isAuth: boolean;
  addMessage: (newMessageBody: string) => void;
};
