import React, {Component} from 'react';
import Header from './Header';
import Main from './Main';
import About from './About';
import Cafe from './Cafe';
import Add from './Add';
import './App.css';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render(){
      return (
      <div className="App">
          <Header />
          <div>
              <Switch>
                  <Route exact path ='/' component={Main}></Route>
                  <Route exact path ='/about' component={About}></Route>
                  <Route exact path ='/cafe' component={Cafe}></Route>
                  <Route exact path ='/add' component={Add}></Route>

              </Switch>
          </div>

      </div>
  );
  }

}

export default App;
