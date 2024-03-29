import {combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';

export const rootReducer=combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})
export type AppRootStateType=ReturnType<typeof rootReducer>
export const store=createStore(rootReducer);

export default store