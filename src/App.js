import React, { Component } from 'react';
import Cookies from 'js-cookie';

import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import ContentArea from './components/ContentArea';

export class App extends Component {
  render() {
    return (
      <div>
        <div className="skin-purple">
          <Header />
          <SideBar />
          <ContentArea />
          <Footer/>
        </div>
      </div>
    );
  }
}
