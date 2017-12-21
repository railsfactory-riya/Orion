import React from 'react';
import { DashBoard } from './DashBoard/DashBoard';

class ContentArea extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <DashBoard />
      </div>
    )
  }
}

export default ContentArea;
