import React from 'react';
import photo from '../../assets/images/noPhotoUser.jpg'

import s from './Users.module.css'
import axios from 'axios';

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
    totalCount?: number,
    error?: string | null

}
export const Users = (props: {
    users: UserResponceType[],
    toggleFollow: (userId: number) => void,
    setUsers: (users: UserResponceType[]) => void
}) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get<UsersResponceType>('https://social-network.samuraijs.com/api/1.0/users').then(res => props.setUsers(res.data.items))

        }
    }


    return (<>
            <button onClick={getUsers}>Get Users</button>
            <ul>
                {props.users.map(u => <li key={u.id}>
                    <div><img src={u.photos.small ? u.photos.small : photo} alt={'profile photo'}
                              className={s.imgSize}/>
                        <button onClick={() => props.toggleFollow(u.id)}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                    </div>
                    <div>
                        <div>
                            <span>{u.name}</span>
                            <p>{u.status}</p>
                        </div>

                        <div><span>{'u.location.country'}</span> <span>{'u.location.city'}</span></div>

                    </div>


                </li>)}
            </ul>
            <button onClick={() => props.setUsers(props.users)}>Show more</button>
        </>
    );
};

