import React, { Component } from "react";
import { render } from "react-dom";


export class App extends Component {
  render() {
    return (
      <h1> Hello !!! </h1>
    );
  }
}

render(
  <App />,
  window.document.getElementById("app")
);
