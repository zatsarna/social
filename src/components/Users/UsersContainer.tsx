import React from 'react';
import {connect} from 'react-redux';
import {UserResponceType, Users} from './Users';
import {setUsersAC, toggleFollowAC} from '../../redux/users-reducer';
import {AppRootStateType} from '../../redux/redux-store';

const mapStateToProps=(state: AppRootStateType)=>{
    return {
        users: state.usersPage.items
    }
}
const mapDispatchToProps=(dispatch: Function)=>{
    return {
        toggleFollow: (userId: number)=>dispatch(toggleFollowAC(userId)),
        setUsers: (users: UserResponceType[])=>dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

