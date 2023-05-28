import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType, updateNewPostText} from '../../../redux/state';

type MyPostsPropsType={
    posts: {posts: PostType[], newPostText: string, }
    addPost: ()=>void
    updateNewPostText: (text: string)=> void
}

export const MyPosts: React.FC<MyPostsPropsType> = ({posts, addPost, updateNewPostText}) => {

    let postsElements = posts.posts.map(el => <Post message={el.message} like_counts={el.like_counts}/>)
    const newPostElement= useRef<HTMLTextAreaElement>(null)

    function addPostHandler() {
        addPost();
    }

    function onChangeHandler() {
        if (newPostElement.current?.value){
            updateNewPostText(newPostElement.current.value);
        }
    }

    return (
        <div className={s.my_posts}>
            <h3>My posts</h3>
            <div className={s.new_post}><textarea ref={newPostElement} onChange={onChangeHandler} value={posts.newPostText}/>
                <button onClick={addPostHandler}>Send</button>
            </div>
            <div className={s.previous_posts}>
                {postsElements}
            </div>
        </div>
    )
}