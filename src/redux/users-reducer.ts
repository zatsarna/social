
import {UserResponceType, UsersResponceType} from '../components/Users/UsersC';
import {addMessageACType, updateNewMessageTextACType} from './dialogs-reducer';
import {addPostACType, updateNewPostTextACType} from './profile-reducer';
import {CommonActionType} from './store';
export type toggleFollowACType=ReturnType<typeof toggleFollowAC>
export const toggleFollowAC=(userId: number)=> ({type: 'TOGGLE-FOLLOW', userId: userId} as const)
export type setUsersACType=ReturnType<typeof setUsersAC>
export const setCurrentPageAC=(currentPage: number)=>({type: 'SET-CURRENT-PAGE', currentPage}as const)
export const setUsersAC=(users: UserResponceType[])=> ({type: 'SET-USERS', users: users} as const)
export type setCurrentPageACType=ReturnType<typeof setCurrentPageAC>
export const setTotalCountAC=(totalCount: number)=>({type: 'SET-TOTAL-COUNT', totalCount} as const)
export type setTotalCountACType=ReturnType<typeof setTotalCountAC>
let initState: UsersResponceType={
    items: [],
    pageSize: 5,
    totalCount: 20,
    currentPage: 1,
}

const usersReducer=(state: UsersResponceType=initState, action: CommonActionType): UsersResponceType=>{
    switch (action.type){
        case 'TOGGLE-FOLLOW':
            return {...state, items: state.items.map(u =>u.id===action.userId ? {...u, followed: !u.followed}:u )}
        case 'SET-USERS':
            return {...state, items: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-COUNT':
            return {...state, totalCount: action.totalCount}
        default:
            return state
    }
}

export default usersReducer;