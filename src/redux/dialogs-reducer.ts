import { v1 } from "uuid";

const initialState = {
  dialogs: [
    { id: v1(), name: "Андрей" },
    { id: v1(), name: "Жена" },
    { id: v1(), name: "Света" },
    { id: v1(), name: "Мама" },
    { id: v1(), name: "Папа" },
    { id: v1(), name: "Вова" },
    { id: v1(), name: "Незнакомец" },
  ],
  messages: [
    { id: v1(), message: "Привет" },
    { id: v1(), message: "Как дела?" },
  ],
};

export const dialogsReducer = (
  state: DialogsStateType = initialState,
  action: DialogsActionsType,
): DialogsStateType => {
  switch (action.type) {
    case "ADD-MESSAGE": {
      const newMessage = { id: v1(), message: action.newMessageBody };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default:
      return state;
  }
};

// actions

export const addMessage = (newMessageBody: string) => {
  return {
    type: "ADD-MESSAGE",
    newMessageBody,
  } as const;
};

export type MessageType = {
  id: string;
  message: string;
};
export type DialogType = {
  id: string;
  name: string;
};
export type DialogsStateType = {
  messages: Array<MessageType>;
  dialogs: Array<DialogType>;
};
export type DialogsActionsType = ReturnType<typeof addMessage>;
