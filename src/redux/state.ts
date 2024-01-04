import {v1} from "uuid";

export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
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

    getState: () => void
    subscribe: (observer: () => void) => void

    addPost: () => void
    updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi, there!', likesCount: 15},
                {id: v1(), message: 'Hello, World!', likesCount: 9},
                {id: v1(), message: 'Hey, everyone!', likesCount: 35}
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
                {id: v1(), message: 'Hello'},
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'Whats up?'},
                {id: v1(), message: 'How are you?'}
            ]
        }
    },
    _callSubscriber(){
        console.log('render!!!')
    },

    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer
    },

    addPost(){
        let newPost = {id: v1(), message: this._state.profilePage.newPostText, likesCount: 0};
        this._state.profilePage.posts.push(newPost); // ТАК ДЕЛАТЬ НЕЛЬЗЯ!!!
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
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
        }
    }
}