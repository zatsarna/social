import {CommonActionType, UsersPageType, UserType} from './store';
export type toggleFollowACType=ReturnType<typeof toggleFollowAC>
export const toggleFollowAC=(userId: number)=> ({type: 'TOGGLE-FOLLOW', userId: userId} as const)
export type setUsersACType=ReturnType<typeof setUsersAC>
export const setUsersAC=(users: UserType[])=> ({type: 'SET-USERS', users: users} as const)



let initState: UsersPageType={
    users: [
        /*{id: 1, fullName: 'Anna Ivanova', status: 'I am a boss', location: {country: 'Ukraine', city: 'Kyiv'}, photo: 'https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=600', follow: true},
        {id: 2, fullName: 'Kate Ivanova', status: 'I am a boss', location: {country: 'Poland', city: 'Krakow'}, photo: 'https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=600', follow: false},
        {id: 3, fullName: 'Iryna Ivanova', status: 'I am a boss', location: {country: 'Ukraine', city: 'Odessa'}, photo: 'https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=600', follow: false},*/
    ]
}

const usersReducer=(state: UsersPageType=initState, action: CommonActionType): UsersPageType=>{
    switch (action.type){
        case 'TOGGLE-FOLLOW':
            return {...state, users: state.users.map(u =>u.id===action.userId ? {...u, follow: !u.follow}:u )}
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export default usersReducer;