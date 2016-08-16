import _ from 'lodash';
import React, { Component } from 'react';
import Issue from '../models/issue.js';

export default class IssuesList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    let issue = new Issue();
    issue.fetchAll().done((response) => {
      this.setState({ 'issues': response.data });
    });
  }

  renderIssues() {
    return _.map(this.state.issues, (issue) => {
      return (
        <li key={ issue.id } className="list-group-item">{ issue.content }</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        { this.renderIssues() }
      </ul>
    );
  }
}
