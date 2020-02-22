import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

// Page Components
import Welcome from './components/Welcome'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './navigation/Navigation'

// Application Function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" render={(props) => <Welcome {...props} name="Brian" />} />
        <Route path="/welcome/:name" component={Welcome} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </div>
    );
  }
}

export default App;
