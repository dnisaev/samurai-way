import {v1} from "uuid";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageText: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: {}
}
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void

    getState: () => StateType
    subscribe: (observer: () => void) => void

    dispatch: (action: ActionsType) => void
}
export type ActionsType =
    AddPostActionType |
    UpdateNewPostTextActionType |
    AddMessageActionType |
    UpdateNewMessageTextActionType

export type AddPostActionType = {
    type: 'ADD-POST'
}
export const addPostAC = (): AddPostActionType => {
    return {
        type: "ADD-POST"
    }
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export const updateNewPostTextAC = (newText: string): UpdateNewPostTextActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    }
}
export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
export const addMessageAC = (): AddMessageActionType => {
    return {
        type: "ADD-MESSAGE"
    }
}
export type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessageText: string
}
export const updateNewMessageTextAC = (newMessageText: string): UpdateNewMessageTextActionType => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessageText: newMessageText
    }
}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Всем привет!', likesCount: 11},
                {id: v1(), message: 'Добро пожаловать в мою социальную сеть «Welcome»', likesCount: 15}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Dmitriy'},
                {id: v1(), name: 'Anya'},
                {id: v1(), name: 'Svetlana'},
                {id: v1(), name: 'Mama'},
                {id: v1(), name: 'Papa'},
                {id: v1(), name: 'Vladimir'},
                {id: v1(), name: 'Andrey'}
            ],
            messages: [
                {id: v1(), message: 'Привет'},
                {id: v1(), message: 'Как дела?'}
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber(){
        console.log('Если вы видите это сообщение, пожалуйста, сообщите нам!')
    },

    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer
    },
    dispatch(action: ActionsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber();
    }
}