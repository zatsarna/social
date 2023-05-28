import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType, updateNewPostText} from '../../redux/state';

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
export const Profile = (props: {state: ProfilePageType, addPost: ()=>void, updateNewPostText: (text: string)=>void}) => {

    return (
        <main>
            <ProfileInfo/>
            <MyPosts posts={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </main>
    )
}