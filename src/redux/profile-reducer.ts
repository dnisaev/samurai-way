import {ActionsType, ProfilePageType} from "./store";
import {v1} from "uuid";

export const profileReducer = (state: ProfilePageType, action: ActionsType): ProfilePageType => {
    if (action.type === 'ADD-POST') {
        let newPost = {id: v1(), message: state.newPostText, likesCount: 0};
        state.posts.push(newPost);
        state.newPostText = '';
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText;
    } else {
        console.log('ERROR: UNEXPECTED ACTION TYPE!!!')
    }
    return state;
}