import {ActionType, ProfilePageType, TextActionType} from './store';

export const addPostAC=()=> ({type: 'ADD-POST'} as const)
export const updateNewPostTextAC=(text: string)=>({
    type: 'UPDATE-NEW-POST-TEXT',
    text:  text
} as const)

let initialState: ProfilePageType={
    posts: [
        {message: 'What is your favourite drink?', id: 1, like_counts: 15},
        {message: 'Hi, How are you?', id: 2, like_counts: 25},
        {message: 'Hi, How are you? Hi, How are you?', id: 3, like_counts: 35},
    ],
    newPostText: '',
}
const profileReducer=(state=initialState, action: ActionType | TextActionType)=>{
    switch (action.type){
        case "ADD-POST":
            state.posts.push({
                message: state.newPostText,
                id: state.posts.length + 1,
                like_counts: 0
            })
            state.newPostText = ''
            return state

        case "UPDATE-NEW-POST-TEXT" :
            state.newPostText = action.text
            return state
        default:
            return state;
    }

}

export default profileReducer;