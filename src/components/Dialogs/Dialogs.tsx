import React, {ChangeEvent, RefObject} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {CommonActionType, DialogPageType} from '../../redux/store';

export const Dialogs = (props: { dialogPage: DialogPageType , updateNewMessageText: (text: string)=>void, addText: ()=>void}) => {

    let dialogsElements = props.dialogPage.dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
    let messagesElements = props.dialogPage.messages.map(el => <Message message={el.message} id={el.id} key={el.id}/>)
    /*let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()*/

    function addText() {
        props.addText()
        //props.dispatch(addMessageAC())
    }
    const onChangeHandler=(e: ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateNewMessageText(e.currentTarget.value)
        //props.dispatch(updateNewMessageTextAC(e.currentTarget.value))

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
                        <textarea  onChange={onChangeHandler} value={props.dialogPage.newMessageText} placeholder={"Enter your message"}></textarea>
                    </div>
                    <div><button onClick={addText}>Send</button></div>
                </div>


            </div>
        </div>
    );
};

