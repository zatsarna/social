import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

export const Dialogs = () => {
    let dialogs = [
        {name: 'Dimych', id: 1},
        {name: 'Andrey', id: 2},
        {name: 'Sveta', id: 3},
        {name: 'Vita', id: 4},
        {name: 'Ann', id: 5}
    ]
    let messages = [
        {message: 'Hi how are you?', id: 1},
        {message: 'Yo', id: 2},
        {message: 'bye', id: 3},
        {message: 'How are you doing', id: 4},
        {message: 'Hello', id: 5}
    ]
    let dialogsElements=dialogs.map(el=><DialogItem name={el.name} id={el.id}/>)
    let messagesElements=messages.map(el=><Message message={el.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

