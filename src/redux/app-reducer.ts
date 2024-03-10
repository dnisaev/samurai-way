import { AppDispatch } from "./redux-store";
import { getAuthUserDataTC } from "./auth-reducer";

let initialState = {
  initialized: false,
};

export const appReducer = (state: AppStateType = initialState, action: AppActionsType) => {
  switch (action.type) {
    case "INITIALIZED-SUCCESS":
      return { ...state, initialized: true };
    default:
      return state;
  }
};

// actions

const initializedSuccessAC = () => ({ type: "INITIALIZED-SUCCESS" }) as const;

// thunks

export const initializeAppTC = () => async (dispatch: AppDispatch) => {
  await dispatch(getAuthUserDataTC());
  dispatch(initializedSuccessAC());
};

// types

type AppStateType = {
  initialized: boolean;
};
export type AppActionsType = ReturnType<typeof initializedSuccessAC>;
