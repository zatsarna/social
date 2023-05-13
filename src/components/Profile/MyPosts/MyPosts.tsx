import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts =()=> {
    let posts = [
        {message: 'What is your favourite drink?', id: 1, like_counts: 15},
        {message: 'Hi, How are you?', id: 2, like_counts: 25},
        {message: 'Hi, How are you? Hi, How are you?', id: 3, like_counts: 35},
    ]
    let postsElements=posts.map(el =>  <Post message={el.message} like_counts={el.like_counts}/>)
    return (
        <div className={s.my_posts}>
            <h3>My posts</h3>
            <div className={s.new_post}><textarea name="new_post" id="new_post" cols={50} rows={5}></textarea>
                <button>Send</button>
            </div>
            <div className={s.previous_posts}>
                {postsElements}
            </div>
        </div>
    )
}