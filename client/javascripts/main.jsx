import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import Header from './header.jsx';
import TransitionsList from './views/transitions-list.jsx';
import Login from './views/login.jsx';
import UsersList from './views/users-list.jsx';


export const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

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
      <div>
        <Header />
        <div className="page-content container-fluid">
          <Router history={ appHistory }>
            <Route path='/transitions' component={ TransitionsList } />
            <Route path='/login' component={ Login } />
            <Route path='/users' component={ UsersList } />
            <Route path='*' component={ NotFound } />
          </Router>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app-root')
);
