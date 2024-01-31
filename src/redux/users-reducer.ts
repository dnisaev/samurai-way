export type UsersActionsType =
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalUsersCountAC>

export const followAC = (userId: string) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}
export const unfollowAC = (userId: string) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: currentPage
    } as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalCount: totalCount
    } as const
}

export type UserType = {
    id: string
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}

export type UsersStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
}

export const usersReducer = (state: UsersStateType = initialState, action: UsersActionsType): UsersStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)};
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)};
        }
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        default: {
            return state;
        }
    }
}