import { v1 } from "uuid";
import { Dispatch } from "redux";
import { profileAPI, usersAPI } from "../api/api";

const initialState = {
  posts: [
    { id: v1(), message: "Добро пожаловать в мою социальную сеть «Welcome»", likesCount: 15 },
    { id: v1(), message: "Всем привет!", likesCount: 11 },
  ],
  profile: null,
  status: "-",
};

export const profileReducer = (
  state: ProfileStateType = initialState,
  action: ProfileActionsType,
): ProfileStateType => {
  switch (action.type) {
    case "ADD-POST":
      return {
        ...state,
        posts: [{ id: v1(), message: action.newPostText, likesCount: 0 }, ...state.posts],
      };
    case "SET-USER-PROFILE":
      return { ...state, profile: action.profile };
    case "SET-STATUS":
      return { ...state, status: action.status };
    case "DELETE-POST":
      return { ...state, posts: state.posts.filter((post) => post.id !== action.postId) };
    default:
      return state;
  }
};

// actions

export const addPost = (newPostText: string) => {
  return {
    type: "ADD-POST",
    newPostText,
  } as const;
};
export const setUserProfile = (profile: ProfileType) => {
  return {
    type: "SET-USER-PROFILE",
    profile,
  } as const;
};
export const setStatus = (status: string) => {
  return {
    type: "SET-STATUS",
    status,
  } as const;
};
export const deletePost = (postId: string) => {
  return {
    type: "DELETE-POST",
    postId,
  } as const;
};

// thunks

export const getProfileTC = (userId: string) => async (dispatch: Dispatch) => {
  const getUsersResponse = await usersAPI.getUsers();
  if (getUsersResponse.data.items[0].id < +userId) {
    userId = "30560";
  }
  const getProfileResponse = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(getProfileResponse.data));
};
export const getStatusTC = (userId: string) => async (dispatch: Dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatusTC = (status: string) => async (dispatch: Dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

// types

export type ProfileActionsType =
  | ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof deletePost>;
export type PostType = {
  id: string;
  message: string;
  likesCount: number;
};
export type ProfileType = {
  aboutMe?: string | null;
  contacts?: {
    facebook?: string | null;
    website?: string | null;
    vk?: string | null;
    twitter?: string | null;
    instagram?: string | null;
    youtube?: string | null;
    mainLink?: string | null;
  };
  lookingForAJob?: boolean | null;
  lookingForAJobDescription?: string | null;
  fullName: string | null;
  userId: number;
  photos?: {
    small?: string | null;
    large?: string | null;
  };
};
export type ProfileStateType = {
  posts: Array<PostType>;
  profile: ProfileType | null;
  status: string;
};
