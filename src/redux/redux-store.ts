import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {DialogsActionsType, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import {thunk as thunkMiddleware, ThunkDispatch} from "redux-thunk";
import {FormAction, reducer as formReducer} from 'redux-form';
import {AppActionsType, appReducer} from "./app-reducer";

export type AppRootStateType = ReturnType<typeof rootReducer>
export type GlobalActionsType = ProfileActionsType | DialogsActionsType | UsersActionsType | AuthActionsType | AppActionsType | FormAction
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, GlobalActionsType>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

// @ts-ignore
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;