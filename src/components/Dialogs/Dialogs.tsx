import React, {RefObject} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogPageType} from '../../redux/state';
/*export type DialogType={
    name: string,
    id: number
}
export type MessagesType={
    message: string,
    id: number
}
export type DialogsPropsType={
    state: {
        dialogs: Array<DialogType>,
        messages: Array<MessagesType>
    }
}*/
export const Dialogs = (props: { state: DialogPageType }) => {

    let dialogsElements = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messagesElements = props.state.messages.map(el => <Message message={el.message}/>)
    let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()

    function addText() {
        alert(newMessageElement.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addText}>Send</button>
            </div>
        </div>
    );
};

