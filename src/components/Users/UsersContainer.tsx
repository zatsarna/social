import React from 'react';
import {connect} from 'react-redux';
import UsersAPIComponent, {UserResponceType} from './UsersC';
import {setCurrentPageAC, setTotalCountAC, setUsersAC, toggleFollowAC} from '../../redux/users-reducer';
import {AppRootStateType} from '../../redux/redux-store';
import UsersC from './UsersC';


const mapStateToProps=(state: AppRootStateType)=>{
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps=(dispatch: Function)=>{
    return {
        toggleFollow: (userId: number)=>dispatch(toggleFollowAC(userId)),
        setUsers: (users: UserResponceType[])=>dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number)=>dispatch(setCurrentPageAC(currentPage)),
        setTotalCount: (totalCount: number)=>dispatch(setTotalCountAC(totalCount))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

