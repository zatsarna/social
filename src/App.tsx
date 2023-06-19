import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';

import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {StateTypeInner} from './redux/state';

/*type StateTypeInner={
    profilePage: {posts: PostType[]}
    dialogsPage: {messages: MessagesType[], dialogs: DialogType[]}
}
type StateType={
    state: StateTypeInner
}*/
function App (props: {state:StateTypeInner, addPost: ()=>void, updateNewPostText: (text: string)=>void}) {

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>

                <div className="app-wrapper-content">
                   
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    <Route path='/dialogs' render={()=><Dialogs state={props.state.dialogsPage} />} />
                    <Route path='/profile' render={()=><Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/news' render={()=><News/>}/>
                    <Route path='/music' render={()=><Music/>}/>
                    <Route path='/settings' render={()=><Settings/>}/>
                </div>

            </div>
    );
}

export default App;