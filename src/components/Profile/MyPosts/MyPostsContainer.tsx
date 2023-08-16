import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';

type MyPostsPropsType={
    //posts: {posts: PostType[], newPostText: string, }
    //dispatch: (action: CommonActionType)=>void
    store: any
}


export const MyPostsContainer: React.FC<MyPostsPropsType> = ({store}) => {


    let state=store.getState()
    function addPostHandler() {
        store.dispatch(addPostAC());
    }

    function onChangeHandler(text: string) {
        store.dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts posts={state.profilePage.posts} updateNewPostText={onChangeHandler} addPost={addPostHandler} newPostText={state.profilePage.newPostText}/>
    )
}