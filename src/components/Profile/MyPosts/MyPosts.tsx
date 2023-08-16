import React, {ChangeEvent, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {CommonActionType, PostType} from '../../../redux/store';

type MyPostsPropsType={
    posts: PostType[],
    updateNewPostText: (text: string)=>void
    addPost: ()=>void
    newPostText: string
    //dispatch: (action: CommonActionType)=>void
}


export const MyPosts: React.FC<MyPostsPropsType> = ({posts, updateNewPostText, addPost, newPostText}) => {

    let postsElements = posts.map(el => <Post message={el.message} like_counts={el.like_counts} key={el.id} id={el.id}/>)
   /* const newPostElement= React.createRef<HTMLTextAreaElement>()*/

    function addPostHandler() {
        addPost()
        //dispatch(addPostAC());
    }

    function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        //dispatch(updateNewPostTextAC(e.currentTarget.value))
        updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.my_posts}>
            <h3>My posts</h3>
            <div className={s.new_post}><textarea  onChange={onChangeHandler} value={newPostText}/>
                <button onClick={addPostHandler}>Send</button>
            </div>
            <div className={s.previous_posts}>
                {postsElements}
            </div>
        </div>
    )
}