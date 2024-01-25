export type UsersActionsType =
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>

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

export type UserType = {
    id: string
    avatarUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}

export type UsersStateType = {
    users: Array<UserType>
}

const initialState = {
    users: []
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default: {
            return state;
        }
    }
}