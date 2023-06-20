import React, {ChangeEvent, RefObject} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {ActionType, addMessageAC, DialogPageType, updateNewMessageTextAC} from '../../redux/state';
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
export const Dialogs = (props: { state: DialogPageType , dispatch: (action: ActionType)=>void}) => {

    let dialogsElements = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messagesElements = props.state.messages.map(el => <Message message={el.message}/>)
    /*let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()*/

    function addText() {
        props.dispatch(addMessageAC())
    }
    const onChangeHandler=(e: ChangeEvent<HTMLTextAreaElement>)=>{
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea  onChange={onChangeHandler} value={props.state.newMessageText} placeholder={"Enter your message"}></textarea>
                    </div>
                    <div><button onClick={addText}>Send</button></div>
                </div>


            </div>
        </div>
    );
};

