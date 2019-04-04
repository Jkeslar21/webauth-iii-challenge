import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Users from './Users';

export default class Home extends Component {

logout = () => {   
    localStorage.removeItem('token');
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h2>Welcome to the Jungle</h2>
        <header>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/users">Users</NavLink>
          <button onClick={this.logout}>Log Out</button>
        </header>
        <main>
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/users' component={Users} />
        </main>
      </div>
    )
  }
}
