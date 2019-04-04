import React from 'react';
import axios from 'axios';

import requiresAuth from './requiresAuth';

class Users extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const endpoint = `/users`;
    axios
      .get(endpoint)
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <h2>List of Users</h2>
          {this.state.users.map(user => (
            <h3 key={user.id}>{user.username}</h3>
          ))}
      </>
    );
  }
}

export default requiresAuth(Users);