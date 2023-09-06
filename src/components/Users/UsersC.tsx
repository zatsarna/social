import React from 'react';
import photo from '../../assets/images/noPhotoUser.jpg'

import s from './Users.module.css'
import axios from 'axios';
import UsersPresentationComponent from './UsersPresentationComponent';

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
    pageSize: number,
    currentPage: number
}

export interface UsersProps {
    users: UserResponceType[],
    toggleFollow: (userId: number) => void,
    setUsers: (users: UserResponceType[]) => void,
    setCurrentPage: (currentPage: number)=>void,
    setTotalCount:(totalCount: number)=>void,
    pageSize: number,
    totalCount: number,
    currentPage: number
}

class UsersAPIComponent extends React.Component<UsersProps> {
    constructor(props: UsersProps) {
        super(props);

    }

    componentDidMount() {
        axios.get<UsersResponceType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(res => {
            this.props.setUsers(res.data.items)
            this.props.setTotalCount(res.data.totalCount)
        })
    }
    onPageChange(el: number){
        this.props.setCurrentPage(el)
        axios.get<UsersResponceType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${el}`).then(res => this.props.setUsers(res.data.items))
    }

    render() {

        return (<UsersPresentationComponent totalCount={this.props.totalCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} users={this.props.users} toggleFollow={this.props.toggleFollow} setUsers={this.props.setUsers} onPageChange={this.onPageChange}/>
        );
    }
}

export default UsersAPIComponent