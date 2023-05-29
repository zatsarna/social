import React from 'react';
import {state} from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addPost, StateTypeInner, updateNewPostText,subscribe} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

const rerenderEntireTree=(state: StateTypeInner)=> {
    ReactDOM.render(
        <BrowserRouter><App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/></BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree)