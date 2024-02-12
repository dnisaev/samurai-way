import {combineReducers, legacy_createStore as createStore} from 'redux'
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {DialogsActionsType, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";

export type ReducersType = ReturnType<typeof reducers>

export type ActionsType = ProfileActionsType | DialogsActionsType | UsersActionsType | AuthActionsType

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export const store = createStore(reducers);

// @ts-ignore
window.store = store;