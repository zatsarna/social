import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../StoreContext';

export const DialogsContainer = () => {


    return (<StoreContext.Consumer>
        {(store)=>{
            let state=store.getState().dialogsPage

            function addText() {
                store.dispatch(addMessageAC())
            }
            const onChangeHandler=(text: string)=>{
                store.dispatch(updateNewMessageTextAC(text))

            }
            return <Dialogs dialogPage={state} updateNewMessageText={onChangeHandler} addText={addText}/>}}
        </StoreContext.Consumer>

    );
};

