import _ from 'lodash';
import React, { Component } from 'react';
import User from '../models/user.js';

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    let user = new User();
    user.fetchAll().done((response) => {
      this.setState({ 'users': response.data });
    });
  }

  renderUsers() {
    return _.map(this.state.users, (user) => {
      return (
        <li key={ user.id } className="list-group-item">{ user.email }</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        { this.renderUsers() }
      </ul>
    );
  }
}
