import React from 'react';
import s from './Navbar.module.css'

console.log(s)
export const Navbar =() => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.active}`}><a href="#">Profile</a></li>
                <li className={s.item}><a href="#">Messages</a></li>
                <li className={s.item}><a href="#">News</a></li>
                <li className={s.item}><a href="#">Music</a></li>
                <li className={s.item}></li>
            </ul>
        </nav>
    )
}