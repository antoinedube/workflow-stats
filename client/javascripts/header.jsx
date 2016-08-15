import React, { Component } from 'react';
import { appHistory } from './main.jsx';
import Request from './models/request.js';
import Session from './session/session.js';

export default class Header extends Component {

  handleLogoutClick() {
    let request = new Request('/logout');
    request.post({}).done(() => {
      Session.removeUser();
      appHistory.push('/login');
    });
  }

  // Render navbar only if user is connected
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand">Workflow statistics</span>
          </div>
          <span className="navbar-text navbar-right" onClick={ this.handleLogoutClick.bind(this) }>Logout</span>
        </div>
      </nav>
    );
  }
}
