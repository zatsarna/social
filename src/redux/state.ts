export type DialogType = {
    name: string,
    id: number
}
export type MessagesType = {
    message: string,
    id?: number
}
export type PostType = {
    message: string | undefined,
    id?: number,
    like_counts: number
}
export type DialogPageType = {
    messages: MessagesType[],
    dialogs: DialogType[],
    newMessageText: string
}
export type ProfilePageType = {
    posts: PostType[],
    newPostText: string,
}
export type StateTypeInner = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}
export type ActionType = {
    type: 'ADD-POST' | 'UPDATE-NEW-POST-TEXT' | "UPDATE-NEW-MESSAGE-TEXT" | 'ADD-MESSAGE',
    text?: string
}

let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'What is your favourite drink?', id: 1, like_counts: 15},
                {message: 'Hi, How are you?', id: 2, like_counts: 25},
                {message: 'Hi, How are you? Hi, How are you?', id: 3, like_counts: 35},
            ],
            newPostText: '',
        },
        dialogsPage: {
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
    },
    _callSubscriber(state: StateTypeInner) {
    },

    getState() {
        return this._state
    },
    subscribe(observer: (state: StateTypeInner) => void) {
        this._callSubscriber = observer
    },

    /*addPost() {
        this._state.profilePage.posts.push({
            message: this._state.profilePage.newPostText,
            id: this._state.profilePage.posts.length + 1,
            like_counts: 0
        })
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    },
    updateNewPostText(text: string) {
        this._state.profilePage.newPostText = text
        this._callSubscriber(this._state);
    },*/

    dispatch(action: ActionType) {
            if (action.type==='ADD-POST'){
                this._state.profilePage.posts.push({
                    message: this._state.profilePage.newPostText,
                    id: this._state.profilePage.posts.length + 1,
                    like_counts: 0
                })
                this._state.profilePage.newPostText = ''
                this._callSubscriber(this._state);

            }
            else if (action.text && action.type==="UPDATE-NEW-POST-TEXT"){
                this._state.profilePage.newPostText = action.text
                this._callSubscriber(this._state);
            }
            else if (action.text && action.type==="UPDATE-NEW-MESSAGE-TEXT"){
                /*this._state.profilePage.newPostText = action.text*/
                this._state.dialogsPage.newMessageText=action.text
                this._callSubscriber(this._state);
            } else  if (action.type==='ADD-MESSAGE'){
                this._state.dialogsPage.messages.push({
                    message: this._state.dialogsPage.newMessageText,
                    id: this._state.dialogsPage.messages.length + 1
                })
                this._state.dialogsPage.newMessageText = ''
                this._callSubscriber(this._state);

            }
    }
}
export const addPostAC=()=> ({type: 'ADD-POST'} as const)
export const updateNewPostTextAC=(text: string)=>({
        type: 'UPDATE-NEW-POST-TEXT',
        text:  text
    } as const)

export const addMessageAC=()=> ({type: 'ADD-MESSAGE'} as const)
export const updateNewMessageTextAC=(text: string)=>({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    text:  text
} as const)
//window.store=store;
export default store;




