import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType} from '../../../redux/state';

type MyPostsPropsType={
    posts: PostType[] ,
    addPost: (text: string)=>void}
export const MyPosts: React.FC<MyPostsPropsType> = ({posts, addPost}) => {

    let postsElements = posts.map(el => <Post message={el.message} like_counts={el.like_counts}/>)
    const newPostElement= useRef<HTMLTextAreaElement>(null)

    function addPostHandler() {
        if (newPostElement.current?.value) {
            addPost(newPostElement.current.value);
            newPostElement.current.value = '';
        }
    }

    return (
        <div className={s.my_posts}>
            <h3>My posts</h3>
            <div className={s.new_post}><textarea ref={newPostElement}></textarea>
                <button onClick={addPostHandler}>Send</button>
            </div>
            <div className={s.previous_posts}>
                {postsElements}
            </div>
        </div>
    )
}