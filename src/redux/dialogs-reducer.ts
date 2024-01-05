import {ActionsType, DialogsPageType} from "./store";
import {v1} from "uuid";

export const addMessageAC = () => {
    return {
        type: "ADD-MESSAGE"
    } as const
}
export const updateNewMessageTextAC = (newMessageText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessageText: newMessageText
    } as const
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