import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';

export const Profile =()=> {
    return (
        <main className={s.profile}>
            <div className={s.picture}>
                <img src="https://www.rd.com/wp-content/uploads/2020/04/GettyImages-1093840488-5-scaled.jpg"
                     alt="nature"/>
            </div>
            <div className={s.ava_and_description}>
                <div className={s.profile_img}>
                    <img
                        src="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg"
                        alt="profile photo"/>
                </div>
                <div className={s.profile_info}>
                    <p className={s.name}>Liuda Z.</p>
                    <p className={s.DOB}>Date of Birth: December 11</p>
                    <p className={s.city}>Columbus</p>
                    <p className={s.education}>NDU</p>
                    <p className={s.website}>No</p>
                </div>
            </div>
            <MyPosts/>
        </main>
    )
}