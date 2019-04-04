import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        department: ''
    };

changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
};

submitHandler = e => {
    e.preventDefault();
    const endpoint = 'http://localhost:5000/api/auth/register';
    const creds = this.state;
    axios
        .post(endpoint, creds)
        .then(res => {
            console.log(res)
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
                <label>Username: <span style={{ color: 'red'}}>*</span> </label>
                <input onChange={this.changeHandler} name='username' type='text' required/>
            </div>
            <div>
                <label>Password: <span style={{ color: 'red'}}>*</span> </label>
                <input onChange={this.changeHandler} name='password' type='password' required/>
            </div>
            <div>
                <label>Department: </label>
                <input onChange={this.changeHandler} name='department' type='text'/>
            </div>
            <div>
            <button type="submit">Register</button>
            </div>
        </form>
      </div>
    )
  }
}