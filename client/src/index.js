import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/store';
let store;
if (localStorage.getItem('currentUser')){
    
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // currentUser = JSON.parse(currentUser)
    const { id } = currentUser;
    const preloadedState = {
        entities: {
            users: {
                [id]: currentUser
            }
        },
        session: {id: id}
    };
    console.log(preloadedState)
    store = configureStore(preloadedState);
    
    
} else {
    store = configureStore()
}
// store = configureStore();
// const store = configureStore();
ReactDOM.render(
    <Root store={store} />, document.getElementById('root'));
serviceWorker.unregister();
