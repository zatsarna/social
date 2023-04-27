import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    like_counts: number
}
export const Post: React.FC<PostPropsType> = (props) => {
    console.log(props.message)
    return (
        <div className={s.post}>
            <div className={s.img_container}>
                <img
                    src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-10/girl-names-that-start-with-c-zz-221027-768b76.jpg"
                    alt="Avatar 1"/>
            </div>
            <div><span>Like {props.like_counts}</span></div>
            {props.message}
        </div>
    )
}