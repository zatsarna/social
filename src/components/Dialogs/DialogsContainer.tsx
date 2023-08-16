import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';

export const DialogsContainer = (props: {store: any }) => {
    let state=props.store.getState().dialogsPage

    function addText() {
        props.store.dispatch(addMessageAC())
    }
    const onChangeHandler=(text: string)=>{
        props.store.dispatch(updateNewMessageTextAC(text))

    }

    return (
       <Dialogs dialogPage={state} updateNewMessageText={onChangeHandler} addText={addText}/>
    );
};

