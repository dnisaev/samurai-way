import {authAPI} from "../api/api";
import {AppDispatch} from "./redux-store";
import {stopSubmit} from "redux-form";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthResponseType = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {...state, ...action.payload}
        default:
            return state;
    }
}

// actions

export const setAuthUserData = (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean) => {
    return {
        type: "SET-AUTH-USER-DATA",
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const
}

// thunks

export const getAuthUserDataTC = () => async (dispatch: AppDispatch) => {
    return await authAPI
        .me()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: AppDispatch) => {
    authAPI
        .login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            } else {
                const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Invalid: error form'
                const action = stopSubmit('login', {_error: message});
                dispatch(action)
            }
        })
}

export const logoutTC = () => (dispatch: AppDispatch) => {
    authAPI
        .logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

// types

export type AuthActionsType =
    | ReturnType<typeof setAuthUserData>
type AuthResponseType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}