import React from 'react';
import Header from './Header';
import Footer from './Footer'
import Main from './Main';
import About from './About';
import Cafe from './Cafe';
import Add from './Add';
import Detail from './Detail';
import './App.css';
import {Router, Route} from 'react-router-dom';
import history from '../history';

const App = () => {
    return (
        <div className="App">
            <Router history={history}>
                <div>
                    <Header/>
                    <Route exact path='/' component={Main}/>
                    <Route path='/about' component={About}/>
                    <Route exact path='/cafe/' component={Cafe}/>
                    <Route path='/cafe/:id' component={Detail}/>
                    <Route path='/add' component={Add}/>
                    <Footer/>
                </div>
            </Router>
        </div>
    )
};


export default App;
