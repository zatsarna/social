import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {UserType} from '../../redux/store';
import {setUsersAC, toggleFollowAC} from '../../redux/users-reducer';
import {AppRootStateType} from '../../redux/redux-store';

const mapStateToProps=(state: AppRootStateType)=>{
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps=(dispatch: Function)=>{
    return {
        toggleFollow: (userId: number)=>dispatch(toggleFollowAC(userId)),
        setUsers: (users: UserType[])=>dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

