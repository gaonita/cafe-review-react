import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer'
import Main from './Main';
import About from './About';
import Cafe from './Cafe';
import Add from './Add';
import Detail from './Detail';
import './App.css';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div>
                    <Switch>
                        <Route exact path='/' component={Main}/>
                        <Route path='/about' component={About}/>
                        <Route exact path='/cafe/' component={Cafe}/>
                        <Route path='/cafe/:id' component={Detail}/>
                        <Route path='/add' component={Add}/>

                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }

}

export default App;
