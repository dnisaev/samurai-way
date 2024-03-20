import { AppRootStateType } from "./redux-store";
import { createSelector } from "reselect";

const getUsersSelector = (state: AppRootStateType) => {
  return state.usersPage.users;
};

export const getPageSize = (state: AppRootStateType) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state: AppRootStateType) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state: AppRootStateType) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state: AppRootStateType) => {
  return state.usersPage.isFetching;
};

export const getFollowingProgress = (state: AppRootStateType) => {
  return state.usersPage.followingProgress;
};

export const getUsers = createSelector(getUsersSelector, (users) => {
  // fake filter
  return users.filter((u) => u);
});
