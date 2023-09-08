import React from 'react';
import photo from '../../assets/images/noPhotoUser.jpg';
import s from './Users.module.css';
import {UserResponceType} from './UsersContainer';


type UsersPresentationComponentPropsType={
    onPageChange: (el: number)=>void,
    users: UserResponceType[],
    toggleFollow: (userId: number) => void,
    setUsers: (users: UserResponceType[]) => void,
    pageSize: number,
    totalCount: number,
    currentPage: number
}
const UsersPresentationComponent = (props: UsersPresentationComponentPropsType) => {
    let pagesCount = props.totalCount / props.pageSize
    let arr: number[]=[]
    for (let i=1; i<pagesCount+1; i++){
        arr.push(i)
    }
    let buttons=arr.map(el =><span key={el} className={props.currentPage===el ? s.selectedPage : ''} onClick={()=>{props.onPageChange(el)
    }}>{el}</span>)
    return (
        <>
            <div>
                {buttons.slice(0,10)} <span>...</span> {buttons.slice(-1)}
            </div>
            <ul>
                {props.users.map(u => <li key={u.id}>
                    <div><img src={u.photos.small ? u.photos.small : photo} alt={'profile photo'}
                              className={s.imgSize}/>
                        <button
                            onClick={() => props.toggleFollow(u.id)}>{u.followed ? 'Unfollow' : 'Follow'}</button>
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

export default UsersPresentationComponent;