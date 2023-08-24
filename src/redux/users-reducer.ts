import {CommonActionType} from './store';
import {UserResponceType, UsersResponceType} from '../components/Users/Users';
export type toggleFollowACType=ReturnType<typeof toggleFollowAC>
export const toggleFollowAC=(userId: number)=> ({type: 'TOGGLE-FOLLOW', userId: userId} as const)
export type setUsersACType=ReturnType<typeof setUsersAC>
export const setUsersAC=(users: UserResponceType[])=> ({type: 'SET-USERS', users: users} as const)



let initState: UsersResponceType={
    items: []
}

const usersReducer=(state: UsersResponceType=initState, action: CommonActionType): UsersResponceType=>{
    switch (action.type){
        case 'TOGGLE-FOLLOW':
            return {...state, items: state.items.map(u =>u.id===action.userId ? {...u, followed: !u.followed}:u )}
        case 'SET-USERS':
            return {...state, items: [...state.items, ...action.users]}
        default:
            return state
    }
}

export default usersReducer;