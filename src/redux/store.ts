import {v1} from "uuid";

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
    dialogPage: DialogsPageType
    profilePage: ProfilePageType
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
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export const addPostAC = (): AddPostActionType => {
    return {
        type: "ADD-POST"
    }
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
export type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessageText: string
}
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

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Всем привет!', likesCount: 11},
                {id: v1(), message: 'Добро пожаловать в мою социальную сеть «Welcome»', likesCount: 15}
            ],
            newPostText: ''
        },
        dialogPage: {
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
        }
    },
    _callSubscriber(){
        console.log('Если вы видите это сообщение в консоли, пожалуйста, сообщите нам!')
    },

    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer
    },
    dispatch(action: ActionsType) {
        if (action.type === 'ADD-POST') {
            let newPost = {id: v1(), message: this._state.profilePage.newPostText, likesCount: 0};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {id: v1(), message: this._state.dialogPage.newMessageText};
            this._state.dialogPage.messages.push(newMessage);
            this._state.dialogPage.newMessageText = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogPage.newMessageText = action.newMessageText;
            this._callSubscriber();
        } else {
            console.log('ERROR: UNEXPECTED ACTION TYPE!!!')
        }
    }
}