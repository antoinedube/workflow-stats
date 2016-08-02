import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import Login from './views/login.jsx';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

class NotFound extends Component {
  render() {
    return (
      <h1>Page not found</h1>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={ appHistory }>
        <Route path='/login' component={ Login } />
        <Route path='*' component={ NotFound } />
      </Router>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app-root')
);
