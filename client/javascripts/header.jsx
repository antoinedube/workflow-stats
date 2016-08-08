import React, { Component } from 'react';

export default class Header extends Component {
  // Render navbar only if user is connected
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand">Workflow statistics</span>
          </div>
        </div>
      </nav>
    );
  }
}
