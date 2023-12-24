import {v1} from "uuid";

export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

export type ProfilePageType = {
    posts: Array<PostType>
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

export const state = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Hi, there!', likesCount: 15},
            {id: v1(), message: 'Hello, World!', likesCount: 9},
            {id: v1(), message: 'Hey, everyone!', likesCount: 35}
        ]
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
}