import { v1 } from "uuid";
import { Dispatch } from "redux";
import { profileAPI, usersAPI } from "api/api";

const initialState = {
  posts: [
    {
      id: v1(),
      message: "Добро пожаловать в мою социальную сеть «Welcome»",
      likesCount: 15,
    },
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

// thunks

export const getProfileTC = (userId: string) => (dispatch: Dispatch) => {
  usersAPI.getUsers().then((response) => {
    if (response.data.items[0].id < +userId) {
      userId = "30560";
    }
    profileAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  });
};
export const getStatusTC = (userId: string) => (dispatch: Dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

// types

export type ProfileActionsType =
  | ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>;
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
