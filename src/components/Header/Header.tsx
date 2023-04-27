import React from 'react';
import  s from './Header.module.css'

 export const Header =() => {
    return (
        <header className={s.header}><img src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297__340.png"
                                        alt="Logo" className={s.logo}/></header>
    )
}