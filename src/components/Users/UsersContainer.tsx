import React from 'react';
import {connect} from 'react-redux';
import {setCurrentPageAC, setTotalCountAC, setUsersAC, toggleFollowAC} from '../../redux/users-reducer';
import axios from 'axios';
import {AppRootStateType} from '../../redux/redux-store';

import UsersPresentationComponent from './UsersPresentationComponent';
import {Dispatch} from 'redux';

export type UserResponceType = {
    name: string,
    id: number,
    photos: {
        small?: string,
        large?: string
    },
    status?: null | string,
    followed: boolean
}
export type UsersResponceType = {
    items: UserResponceType[],
    totalCount: number,
    error?: string | null

}
export type CurrentPageansPageSize={
    pageSize: number,
    currentPage: number
}

export type UsersProps =mapStateType & mapDispatchType

class UsersContainer extends React.Component<mapDispatchType, mapStateType> {
  /*  constructor(props: UsersProps) {
        super(props);
    }*/

    componentDidMount() {
        axios.get<UsersResponceType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.state.pageSize}&page=${this.state.currentPage}`).then(res => {
            this.props.setUsers(res.data.items)
            this.props.setTotalCount(res.data.totalCount)
        })
    }
    onPageChange(el: number){
        debugger
        this.props.setCurrentPage(el)


        axios.get<UsersResponceType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.state.pageSize}&page=${el}`).then(res => this.props.setUsers(res.data.items))
    }

    render() {

        return (<UsersPresentationComponent totalCount={this.state.totalCount} pageSize={this.state.pageSize} currentPage={this.state.currentPage} users={this.state.users} toggleFollow={this.props.toggleFollow} setUsers={this.props.setUsers} onPageChange={this.onPageChange}/>
        );
    }
}
type mapStateType={
    users:  UserResponceType[],
    pageSize: number,
    totalCount: number,
    currentPage: number
}
type mapDispatchType={
    toggleFollow: (userId: number) => void,
    setUsers: (users: UserResponceType[]) => void,
    setCurrentPage: (currentPage: number)=>void,
    setTotalCount:(totalCount: number)=>void,
}
const mapStateToProps=(state: AppRootStateType): mapStateType=>{
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps=(dispatch: Dispatch): mapDispatchType=>{
    return {
        toggleFollow: (userId: number)=>dispatch(toggleFollowAC(userId)),
        setUsers: (users: UserResponceType[])=>dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number)=>{
            dispatch(setCurrentPageAC(currentPage))},
        setTotalCount: (totalCount: number)=>dispatch(setTotalCountAC(totalCount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

