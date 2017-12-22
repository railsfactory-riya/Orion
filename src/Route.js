import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { App } from './App';


export class AppRoute extends Component {
  render() {
    return (
      <Router>
        <Route path={'/'} component={App} />
      </Router>
    );
  }
}
