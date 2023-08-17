import React from 'react';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { StateTypeInner} from './redux/store';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

const rerenderEntireTree=(state: StateTypeInner)=> {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
               {/* <App state={state} dispatch={store.dispatch.bind(store)} store={store} />*/}
                <App/>
            </Provider>
            </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(()=> {
    let state=store.getState()
    rerenderEntireTree(state)
})