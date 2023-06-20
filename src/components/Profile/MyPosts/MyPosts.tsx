import React, {ChangeEvent, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionType, addPostAC, PostType, updateNewPostTextAC} from '../../../redux/state';

type MyPostsPropsType={
    posts: {posts: PostType[], newPostText: string, }
    dispatch: (action: ActionType)=>void
}


export const MyPosts: React.FC<MyPostsPropsType> = ({posts, dispatch}) => {

    let postsElements = posts.posts.map(el => <Post message={el.message} like_counts={el.like_counts} key={el.id}/>)
   /* const newPostElement= React.createRef<HTMLTextAreaElement>()*/

    function addPostHandler() {
        dispatch(addPostAC());
    }

    function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(updateNewPostTextAC(e.currentTarget.value))

       /* if (newPostElement.current){
            updateNewPostText(newPostElement.current.value);
        }*/
    }

    return (
        <div className={s.my_posts}>
            <h3>My posts</h3>
            <div className={s.new_post}><textarea  onChange={onChangeHandler} value={posts.newPostText}/>
                <button onClick={addPostHandler}>Send</button>
            </div>
            <div className={s.previous_posts}>
                {postsElements}
            </div>
        </div>
    )
}