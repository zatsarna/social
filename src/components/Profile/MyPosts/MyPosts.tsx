import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType} from '../../../redux/state';

/*type PostType = {
    message: string,
    id: number,
    like_counts: number
}

type PostsType = { posts: PostType[] }*/
export const MyPosts = (props: {posts: PostType[]}) => {

    let postsElements = props.posts.map(el => <Post message={el.message} like_counts={el.like_counts}/>)
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