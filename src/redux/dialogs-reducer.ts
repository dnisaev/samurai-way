import {v1} from "uuid";

export type DialogsActionsType =
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof updateNewMessageTextAC>

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

export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}
export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageText: string
}

const initialState = {
    dialogs: [
        {id: v1(), name: 'Андрей'},
        {id: v1(), name: 'Жена'},
        {id: v1(), name: 'Света'},
        {id: v1(), name: 'Мама'},
        {id: v1(), name: 'Папа'},
        {id: v1(), name: 'Вова'},
        {id: v1(), name: 'Незнакомец'}
    ],
    messages: [
        {id: v1(), message: 'Привет'},
        {id: v1(), message: 'Как дела?'}
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsType): DialogsPageType => {

    switch (action.type) {
        case "ADD-MESSAGE": {
            const newMessage = {id: v1(), message: state.newMessageText};
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            return {
                ...state,
                newMessageText: action.newMessageText
            };
        }
        default: {
            return state;
        }
    }
}