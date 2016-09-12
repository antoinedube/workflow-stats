import _ from 'lodash';
import React, { Component } from 'react';
import Transition from '../models/transition.js';

export default class TransitionsList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    let transition = new Transition();
    transition.fetchAll().done((response) => {
      this.setState({ 'transitions': response.data });
    });
  }

  renderTransitions() {
    return _.map(this.state.transitions, (transition) => {
      return (
        <li key={ transition.id } className="list-group-item">{ transition.content }</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        { this.renderTransitions() }
      </ul>
    );
  }
}
