import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';


/*export const MyPostsContainer: React.FC = () => {
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
}*/
const mapStateToProps=(state: AppRootStateType)=>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps=(dispatch: Function)=>{
    return {
        updateNewPostText: (text: string)=>dispatch(updateNewPostTextAC(text)),
        addPost: ()=>{dispatch(addPostAC())}
    }
}
export const MyPostsContainer=connect(mapStateToProps, mapDispatchToProps)(MyPosts)