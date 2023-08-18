import React from 'react';
import {UserType} from '../../redux/store';
import s from './Users.module.css'
export const Users = (props: {
    users: UserType[],
    toggleFollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void
}) => {

    if (props.users.length===0){
        props.setUsers([
            {id: 1, fullName: 'Anna Ivanova', status: 'I am a boss', location: {country: 'Ukraine', city: 'Kyiv'}, photo: 'https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=600', follow: true},
            {id: 2, fullName: 'Kate Ivanova', status: 'I am a boss', location: {country: 'Poland', city: 'Krakow'}, photo: 'https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=600', follow: false},
            {id: 3, fullName: 'Iryna Ivanova', status: 'I am a boss', location: {country: 'Ukraine', city: 'Odessa'}, photo: 'https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=600', follow: false}
        ])
    }

    return (<>
        <ul>
            {props.users.map(u => <li key={u.id}>
                <div><img src={u.photo} alt={'profile photo'} className={s.imgSize}/>
                    <button onClick={()=>props.toggleFollow(u.id)}>{u.follow ? 'Unfollow' : 'Follow'}</button>
                </div>
                <div>
                    <div>
                        <span>{u.fullName}</span>
                        <p>{u.status}</p>
                    </div>

                    <div><span>{u.location.country}</span> <span>{u.location.city}</span></div>

                </div>


            </li>)}
        </ul>
        <button onClick={()=>props.setUsers(props.users)}>Show more</button>
        </>
    );
};

