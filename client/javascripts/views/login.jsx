import React, { Component } from 'react';
import { Request } from '../models/request.js';

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
    console.log('Submit: ', this.state);
    let request = new Request('/login');
    request.post(this.state).done((response) => {
      console.log('response: ', response);
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
