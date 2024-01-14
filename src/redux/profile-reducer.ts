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

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

const initialState = {
    posts: [
        {id: v1(), message: 'Всем привет!!!', likesCount: 11},
        {id: v1(), message: 'Добро пожаловать в мою социальную сеть «Welcome»', likesCount: 15}
    ],
    newPostText: ''}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {id: v1(), message: state.newPostText, likesCount: 0};
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        }
        case "UPDATE-NEW-POST-TEXT": {
            state.newPostText = action.newText;
            return state;
        }
        default: {
            return state;
        }
    }
}