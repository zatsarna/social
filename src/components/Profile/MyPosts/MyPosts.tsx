import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts =()=> {
    return (
        <div className={s.my_posts}>
            <h3>My posts</h3>
            <div className={s.new_post}><textarea name="new_post" id="new_post" cols={50} rows={5}></textarea>
                <button>Send</button>
            </div>
            <div className={s.previous_posts}>
                <Post message='What is your favourite drink?' like_counts={15}/>
                <Post message='Hi, How are you?' like_counts={25}/>
                <Post message='Hi, How are you?' like_counts={19}/>
            </div>
        </div>
    )
}