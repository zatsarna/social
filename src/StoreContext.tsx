import React, {ReactNode} from 'react';
import {AppRootStateType, store} from './redux/redux-store';
import {EmptyObject, Store} from 'redux';
import {CommonActionType, DialogPageType, ProfilePageType} from './redux/store';

export const StoreContext=React.createContext<Store>(store)

export const Provider=(props: {store: Store, children: ReactNode})=>{
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}