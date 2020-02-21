import React from 'react';
import './App.css';

// Page Components
import Welcome from './components/Welcome'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './navigation/Navigation'

import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" render={(...props) => <Welcome name="Brian" />} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
    </div>
  );
}

export default App;
