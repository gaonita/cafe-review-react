import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';


const firebaseConfig = {
    apiKey: "AIzaSyAOpqLnUvRi0hGnQ5ClqAUN-j1TRUyNM3w",
    authDomain: "cafe-8de15.firebaseapp.com",
    databaseURL: "https://cafe-8de15.firebaseio.com",
    projectId: "cafe-8de15",
    storageBucket: "cafe-8de15.appspot.com",
    messagingSenderId: "744076040722",
    appId: "1:744076040722:web:59269394dfda1e4b"
};

firebase.initializeApp(firebaseConfig);



ReactDOM.render(
    <Provider store = {store}>
    <BrowserRouter> <App /> </BrowserRouter>
    </Provider>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
