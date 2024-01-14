import {v1} from "uuid";
import {
    addPostAC,
    updateNewPostTextAC
} from "./profile-reducer";
import {
    addMessageAC,
    updateNewMessageTextAC
} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

type MessageType = {
    id: string
    message: string
}
type DialogType = {
    id: string
    name: string
}
type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageText: string
}

type PostType = {
    id: string
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

type StateType = {
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

type ActionsType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof updateNewMessageTextAC>

let legacy_store: StoreType = {
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
        // this._state.profilePage = profileReducer(this._state.profilePage, action);
        // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber();
    }
}

console.log(legacy_store)