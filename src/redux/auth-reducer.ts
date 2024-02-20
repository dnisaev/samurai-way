import {Dispatch} from "redux";
import {authAPI} from "../api/api";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthResponseType = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}

// actions

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

// thunks

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    authAPI.getAuth().then(response => {
        if (response.data.resultCode === 0) {
            const {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })
}

// types

export type AuthActionsType = ReturnType<typeof setAuthUserData>
type AuthResponseType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}