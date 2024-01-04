import {ActionsType, DialogsPageType} from "./store";
import {v1} from "uuid";

export const dialogsReducer = (state: DialogsPageType, action: ActionsType): DialogsPageType => {
    if (action.type === 'ADD-MESSAGE') {
        let newMessage = {id: v1(), message: state.newMessageText};
        state.messages.push(newMessage);
        state.newMessageText = '';
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        state.newMessageText = action.newMessageText;
    } else {
        console.log('ERROR: UNEXPECTED ACTION TYPE!!!')
    }
    return state;
}