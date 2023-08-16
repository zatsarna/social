import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {StoreContext} from '../../../StoreContext';


export const MyPostsContainer: React.FC = () => {
    //let state = store.getState()

    return (
        <StoreContext.Consumer>
            {(store)=>{
                let state = store.getState()
                function addPostHandler() {
                    store.dispatch(addPostAC());
                }

                function onChangeHandler(text: string) {
                    store.dispatch(updateNewPostTextAC(text))
                }
                return <MyPosts posts={state.profilePage.posts} updateNewPostText={onChangeHandler} addPost={addPostHandler}
                     newPostText={state.profilePage.newPostText}/>}}
        </StoreContext.Consumer>

    )
}