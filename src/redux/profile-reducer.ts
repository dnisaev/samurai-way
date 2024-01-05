import {ActionsType, ProfilePageType} from "./store";
import {v1} from "uuid";

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

export const profileReducer = (state: ProfilePageType, action: ActionsType): ProfilePageType => {
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