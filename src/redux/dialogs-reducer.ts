import {ActionType, DialogPageType, TextActionType} from './store';

export const addMessageAC=()=> ({type: 'ADD-MESSAGE'} as const)
export const updateNewMessageTextAC=(text: string)=>({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    text:  text
} as const)

let initState: DialogPageType={
    messages: [
        {message: 'Hi how are you?', id: 1},
        {message: 'Yo', id: 2},
        {message: 'bye', id: 3},
        {message: 'How are you doing', id: 4},
        {message: 'Hello', id: 5}
    ],
    newMessageText: "",
    dialogs: [
        {name: 'Dimych', id: 1},
        {name: 'Andrey', id: 2},
        {name: 'Sveta', id: 3},
        {name: 'Vita', id: 4},
        {name: 'Ann', id: 5}
    ]
}

const dialogsReducer=(state: DialogPageType=initState, action: ActionType | TextActionType): DialogPageType=>{
    switch (action.type){
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText=action.text
            return state
        case 'ADD-MESSAGE':
            state.messages.push({
                message: state.newMessageText,
                id: state.messages.length + 1
            })
            state.newMessageText = ''
            return state
        default:
            return state
    }
}

export default dialogsReducer;