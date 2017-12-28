import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { App } from './App';
import { Signin } from './components/Signin';
import { Signup } from './components/Signup';


export class AppRoute extends Component {
  render() {
    return (
      <Router>
        <Route path={'/'} component={App} />
      </Router>
    );
  }
}
