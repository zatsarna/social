import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateTypeInner} from './redux/state';
import {BrowserRouter} from 'react-router-dom';
export const rerenderEntireTree=(state: StateTypeInner)=> {
    ReactDOM.render(
        <BrowserRouter><App state={state} addPost={addPost}/></BrowserRouter>,
        document.getElementById('root')
    );
}


