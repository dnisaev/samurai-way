import { v1 } from "uuid";
import { Dispatch } from "redux";
import { profileAPI, usersAPI } from "../api/api";

const initialState = {
  posts: [
    { id: v1(), message: "Добро пожаловать в мою социальную сеть «Welcome»", likesCount: 15, photos: {small: '', large: ''} },
    { id: v1(), message: "Всем привет!", likesCount: 11, photos: {small: '', large: ''} },
  ],
  profile: {
    aboutMe: '',
    contacts: {
      facebook: '',
      website: '',
      vk: '',
      twitter: '',
      instagram: '',
      youtube: '',
      mainLink: '',
    },
    lookingForAJob: true,
    lookingForAJobDescription: '',
    fullName: '',
    userId: 30560,
    photos: {
      small: '',
      large: '',
    }
  },
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
        posts: [{ id: v1(), message: action.newPostText, likesCount: 0, photos: {
            small: '',
            large: '',
          } }, ...state.posts],
      };
    case "SET-USER-PROFILE":
      return { ...state, profile: action.profile };
    case "SET-STATUS":
      return { ...state, status: action.status };
    case "DELETE-POST":
      return { ...state, posts: state.posts.filter((post) => post.id !== action.postId) };
    case "SAVE-PHOTO":
      return { ...state, profile: {...state.profile, photos: action.photos} };
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
export const savePhotoSuccess = (photos: ProfilePhotosType) => {
  return {
    type: "SAVE-PHOTO",
    photos,
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
export const savePhotoTC = (photo: File) => async (dispatch: Dispatch) => {
  const response = await profileAPI.savePhoto(photo);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos));
  }
};

// types

export type ProfileActionsType =
  | ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof deletePost>
  | ReturnType<typeof savePhotoSuccess>
export type PostType = {
  id: string;
  message: string;
  likesCount: number;
  photos: ProfilePhotosType;
};
export type ProfilePhotosType = {
  small: string;
  large: string;
}
export type ProfileType = {
  aboutMe: string;
  contacts: {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    mainLink: string;
  };
  lookingForAJob?: boolean;
  lookingForAJobDescription?: string;
  fullName: string;
  userId: number;
  photos: ProfilePhotosType;
};
export type ProfileStateType = {
  posts: Array<PostType>;
  profile: ProfileType;
  status: string;
};
