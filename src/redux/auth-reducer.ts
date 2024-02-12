export type AuthActionsType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: "SET-AUTH-USER-DATA",
        data: {
            id,
            email,
            login
        }
    } as const
}

type AuthResponseType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthResponseType = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA': {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}