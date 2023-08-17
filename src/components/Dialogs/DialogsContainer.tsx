import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {DialogPageType} from '../../redux/store';
import {AppRootStateType} from '../../redux/redux-store';


/*export const DialogsContainer = () => {


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
};*/

let mapStateToProps=(state: AppRootStateType)=>{
    return {
        dialogPage: state.dialogsPage
    }
}
let mapDispatchToProps=(dispatch: Function)=>{
    return {
        updateNewMessageText: (text: string)=>{dispatch(updateNewMessageTextAC(text))},
        addText: ()=>{dispatch(addMessageAC())}
    }
}

export const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)

