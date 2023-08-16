import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import { CommonActionType, ProfilePageType} from '../../redux/store';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

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
export const Profile = (props: {store: any}) => {

    return (
        <main>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </main>
    )
}