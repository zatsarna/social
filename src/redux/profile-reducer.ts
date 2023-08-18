import { CommonActionType, ProfilePageType} from './store';

export type addPostACType=ReturnType<typeof addPostAC>
export const addPostAC=()=> ({type: 'ADD-POST'} as const)
export type updateNewPostTextACType =ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC=(text: string)=>({
    type: 'UPDATE-NEW-POST-TEXT',
    text:  text
} as const)

let initialState: ProfilePageType={
    posts: [
        {message: 'What is your favourite drink?', id: 1, like_counts: 15},
        {message: 'Hi, How are you?', id: 2, like_counts: 25}
    ],
    newPostText: '',
}
const profileReducer=(state: ProfilePageType=initialState, action: CommonActionType): ProfilePageType=>{
    switch (action.type){
        case "ADD-POST":
            return {...state, posts: [ {message: state.newPostText, id: state.posts.length+1, like_counts: 0}, ...state.posts], newPostText: ''}

        case "UPDATE-NEW-POST-TEXT" :
            return {...state, newPostText: action.text}
        default:
            return state;
    }
}

export default profileReducer;