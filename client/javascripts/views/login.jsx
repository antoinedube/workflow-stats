import React, { Component } from 'react';
import { appHistory } from '../main.jsx';
import Request from '../models/request.js';
import Session from '../session/session.js';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  submitForm() {
    let request = new Request('/login');
    request.post(this.state).done((response) => {
      Session.setUser(response.user);
      appHistory.push('/users');
    });
  }

  render() {
    return (
      <form onSubmit={ this.submitForm.bind(this) }>
        <div className="form-group">
          <label htmlFor="usernameInput">Username</label>
          <input type="text" className="form-control" id="usernameInput" placeholder="Username" onChange={ this.handleUsernameChange.bind(this) } />
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input type="password" className="form-control" id="passwordInput" placeholder="Password" onChange={ this.handlePasswordChange.bind(this) } />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}
