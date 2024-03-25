import { authAPI, securityAPI } from "../api/api";
import { AppDispatch } from "./redux-store";
import { stopSubmit } from "redux-form";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null,
};

export const authReducer = (state: AuthResponseType = initialState, action: AuthActionsType) => {
  switch (action.type) {
    case "SET-AUTH-USER-DATA":
    case "GET-CAPTCHA-URL-SUCCESS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// actions

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
  return {
    type: "SET-AUTH-USER-DATA",
    payload: {
      id,
      email,
      login,
      isAuth,
    },
  } as const;
};

export const getCaptchaUrlSuccess = (captcha: string) => {
  return {
    type: "GET-CAPTCHA-URL-SUCCESS",
    payload: {
      captcha,
    },
  } as const;
};

// thunks

export const getAuthUserDataTC = () => async (dispatch: AppDispatch) => {
  const response = await authAPI.me();

  if (response.data.resultCode === 0) {
    const { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const loginTC =
  (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: AppDispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
      await dispatch(getAuthUserDataTC());
    } else {
      if (response.data.resultCode === 10) {
        await dispatch(getCaptchaUrlTC());
      }
      const message = response.data.messages.length > 0 ? response.data.messages[0] : "Invalid: error form";
      const action = stopSubmit("login", { _error: message });
      dispatch(action);
    }
  };

export const logoutTC = () => async (dispatch: AppDispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCaptchaUrlTC = () => async (dispatch: AppDispatch) => {
  const response = await securityAPI.getCaptcha();
  const captcha = response.data.url;
  dispatch(getCaptchaUrlSuccess(captcha));
};

// types

export type AuthActionsType = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrlSuccess>;
type AuthResponseType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captcha: string | null;
};
