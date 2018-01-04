import React, { Component } from 'react';
import { connect } from "react-redux";

import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import ContentArea from './components/ContentArea';


export class App extends Component {
  render() {
    return (
      <div className="skin-purple" style={{position: "relative"}}>
        <Header />
        <SideBar />
        <ContentArea />
        <Footer />
      </div>
    );
  }
}
