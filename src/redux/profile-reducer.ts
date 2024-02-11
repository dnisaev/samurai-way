import {v1} from "uuid";

export type ProfileActionsType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type ProfileStateType = {
    posts: Array<PostType>
    newPostText: string
}

const initialState = {
    posts: [
        {id: v1(), message: 'Добро пожаловать в мою социальную сеть «Welcome»', likesCount: 15},
        {id: v1(), message: 'Всем привет!!!', likesCount: 11}
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {id: v1(), message: state.newPostText, likesCount: 0};
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            };
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default: {
            return state;
        }
    }
}