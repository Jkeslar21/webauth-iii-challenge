import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    };

changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
};

submitHandler = e => {
    e.preventDefault();
    const endpoint = 'http://localhost:5000/api/auth/login';
    const creds = this.state;
    axios
        .post(endpoint, creds)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/users');
        })
        .catch(err => {
            console.log(err)
        })
}
      
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <label>Username: </label>
                <input onChange={this.changeHandler} name='username' type='text' />
            </div>
            <div>
                <label>Password: </label>
                <input onChange={this.changeHandler} name='password' type='password'/>
            </div>
            <div>
            <button type="submit">Log In</button>
            </div>
        </form>
      </div>
    )
  }
}
