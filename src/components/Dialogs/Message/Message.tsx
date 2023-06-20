import React from 'react';
import s from '../Dialogs.module.css'
import {MessagesType} from '../../../redux/store';

/*type MessagePropsType = {
    message: string
}*/
export const Message = (props: MessagesType) => {
    return (
        <>
            <div className={s.message}>{props.message}</div>

        </>
    )
}


