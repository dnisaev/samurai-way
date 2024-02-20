import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const initialState = {
    posts: [
        {id: v1(), message: 'Добро пожаловать в мою социальную сеть «Welcome»', likesCount: 15},
        {id: v1(), message: 'Всем привет!', likesCount: 11}
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [{id: v1(), message: state.newPostText, likesCount: 0}, ...state.posts],
                newPostText: ''
            }
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

// actions

export const addPost = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const updateNewPostText = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile: profile
    } as const
}

// thunks

export const getProfileTC = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getUsers().then(response => {
        if (response.data.items[0].id < +userId) {
            userId = "30560"
        }
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    })
}

// types

export type ProfileActionsType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfileType = {
    aboutMe?: string | null
    contacts?: {
        facebook?: string | null
        website?: string | null
        vk?: string | null
        twitter?: string | null
        instagram?: string | null
        youtube?: string | null
        mainLink?: string | null
    },
    lookingForAJob?: boolean | null
    lookingForAJobDescription?: string | null
    fullName: string | null
    userId: number
    photos?: {
        small?: string | null
        large?: string | null
    }
}
export type ProfileStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}