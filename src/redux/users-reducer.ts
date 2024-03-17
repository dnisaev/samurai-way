import { Dispatch } from "redux";
import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingProgress: [],
};

export const usersReducer = (state: UsersStateType = initialState, action: UsersActionsType): UsersStateType => {
  switch (action.type) {
    case "FOLLOW":
      // return { ...state, users: state.users.map((u) => (u.id === action.userId ? { ...u, followed: true } : u)) };
      return { ...state, users: updateObjectInArray(state.users, action.userId, "id", { followed: true }) };
    case "UNFOLLOW":
      // return { ...state, users: state.users.map((u) => (u.id === action.userId ? { ...u, followed: false } : u)) };
      return { ...state, users: updateObjectInArray(state.users, action.userId, "id", { followed: false }) };
    case "SET-USERS":
      return { ...state, users: action.users };
    case "SET-CURRENT-PAGE":
      return { ...state, currentPage: action.currentPage };
    case "SET-TOTAL-USERS-COUNT":
      return { ...state, totalUsersCount: action.totalCount };
    case "TOGGLE-IS-FETCHING":
      return { ...state, isFetching: action.isFetching };
    case "TOGGLE-IS-FOLLOWING-PROGRESS":
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter((id) => id !== action.userId),
      };
    default: {
      return state;
    }
  }
};

// actions

export const followSuccess = (userId: string) => {
  return {
    type: "FOLLOW",
    userId,
  } as const;
};
export const unfollowSuccess = (userId: string) => {
  return {
    type: "UNFOLLOW",
    userId,
  } as const;
};
export const setUsers = (users: Array<UserType>) => {
  return {
    type: "SET-USERS",
    users,
  } as const;
};
export const setCurrentPage = (currentPage: number) => {
  return {
    type: "SET-CURRENT-PAGE",
    currentPage,
  } as const;
};
export const setTotalUsersCount = (totalCount: number) => {
  return {
    type: "SET-TOTAL-USERS-COUNT",
    totalCount,
  } as const;
};
export const toggleIsFetching = (isFetching: boolean) => {
  return {
    type: "TOGGLE-IS-FETCHING",
    isFetching,
  } as const;
};
export const toggleFollowingProgress = (isFetching: boolean, userId: string) => {
  return {
    type: "TOGGLE-IS-FOLLOWING-PROGRESS",
    isFetching,
    userId,
  } as const;
};

// thunks

export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPage));
  const response = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setUsers(response.data.items));
  dispatch(setTotalUsersCount(response.data.totalCount));
  dispatch(toggleIsFetching(false));
};

const followUnfollowFlow = async (dispatch: Dispatch, userId: string, apiMethod: any, actionCreator: any) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const followUserTC = (userId: string) => async (dispatch: Dispatch) => {
  await followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followSuccess);
};
export const unfollowUserTC = (userId: string) => async (dispatch: Dispatch) => {
  await followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess);
};

// types

export type UserType = {
  id: string;
  name: string;
  status: string;
  photos: {
    small: string;
    large: string;
  };
  followed: boolean;
};
export type UsersStateType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingProgress: Array<string>;
};
export type UsersActionsType =
  | ReturnType<typeof followSuccess>
  | ReturnType<typeof unfollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleFollowingProgress>;
