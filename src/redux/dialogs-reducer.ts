import {ActionsType, AddMessageActionType, DialogsPageType, UpdateNewMessageTextActionType} from "./store";
import {v1} from "uuid";

export const addMessageAC = (): AddMessageActionType => {
    return {
        type: "ADD-MESSAGE"
    }
}
export const updateNewMessageTextAC = (newMessageText: string): UpdateNewMessageTextActionType => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessageText: newMessageText
    }
}

export const dialogsReducer = (state: DialogsPageType, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            let newMessage = {id: v1(), message: state.newMessageText};
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            state.newMessageText = action.newMessageText;
            return state;
        }
        default: {
            return state;
        }
    }
}