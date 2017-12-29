import React, { Component } from 'react';
import { render } from 'react-dom';

import AppRoute from './Route';


export class App extends Component {
  render() {
    return (
      <AppRoute />
    );
  }
}

render(
  <App />,
  window.document.getElementById('root')
);
