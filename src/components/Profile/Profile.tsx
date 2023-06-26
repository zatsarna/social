import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import { CommonActionType, ProfilePageType} from '../../redux/store';

/*export type PostType={
    message: string,
    id: number,
    like_counts: number
}
type PostsType={
    state: {
        posts: PostType[]
    }

}*/
export const Profile = (props: {state: ProfilePageType, dispatch: (action: CommonActionType)=>void}) => {

    return (
        <main>
            <ProfileInfo/>
            <MyPosts posts={props.state} dispatch={props.dispatch}/>
        </main>
    )
}