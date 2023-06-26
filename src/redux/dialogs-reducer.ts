import { CommonActionType, DialogPageType} from './store';
export type addMessageACType=ReturnType<typeof addMessageAC>
export const addMessageAC=()=> ({type: 'ADD-MESSAGE'} as const)

export type updateNewMessageTextACType=ReturnType<typeof updateNewMessageTextAC>
export const updateNewMessageTextAC=(text: string)=>({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    text:  text
} as const)

let initState: DialogPageType={
    messages: [
        {message: 'Hi how are you?', id: 1},
        {message: 'Yo', id: 2}
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

const dialogsReducer=(state: DialogPageType=initState, action: CommonActionType): DialogPageType=>{
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