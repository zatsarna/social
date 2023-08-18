import React from 'react';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                {/* <App state={state} dispatch={store.dispatch.bind(store)} store={store} />*/}
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );

/*const rerenderEntireTree=()=> {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
               {/!* <App state={state} dispatch={store.dispatch.bind(store)} store={store} />*!/}
                <App/>
            </Provider>
            </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree();*/

/*
store.subscribe(()=> {
    let state=store.getState()
    rerenderEntireTree(state)
})*/
