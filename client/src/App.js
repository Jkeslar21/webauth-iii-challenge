import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
// import Register from './components/Register';
// import Login from './components/Login';
// import Users from './components/Users';
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Home} />
      </div>
    );
  }
}

export default App;
