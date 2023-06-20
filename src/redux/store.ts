import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

export type DialogType = {
    name: string,
    id: number
}
export type MessagesType = {
    message: string,
    id: number
}
export type PostType = {
    message: string,
    id: number,
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
    type: 'ADD-POST' | 'ADD-MESSAGE',
}
export type TextActionType = {
    type:  'UPDATE-NEW-POST-TEXT' | "UPDATE-NEW-MESSAGE-TEXT",
    text: string
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

    dispatch(action: ActionType | TextActionType) {
            this._state.profilePage=profileReducer(this._state.profilePage,action)
            this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)
            this._callSubscriber(this._state);
    }
}



//window.store=store;
export default store;




