import React from "react";
import {StoreType} from "./legacy_store";

export const Legacy_StoreContext = React.createContext({} as StoreType)

export const Provider = (props: any) => {
    return <Legacy_StoreContext.Provider value={props.store}>
        {props.children}
    </Legacy_StoreContext.Provider>
}