import {AppRootStateType} from "./redux-store";

export const getUsers = (state: AppRootStateType) => {
    return state.usersPage.users
}

export const getPageSize = (state: AppRootStateType) => {
    return state.usersPage.pageSize
}

export const getCurrentPage = (state: AppRootStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppRootStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingProgress = (state: AppRootStateType) => {
    return state.usersPage.followingProgress
}