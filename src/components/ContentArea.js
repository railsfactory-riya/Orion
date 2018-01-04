import React, { Component } from 'react';

import ContentAreaRoute from '../Route';

class ContentArea extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <ContentAreaRoute />
      </div>
    )
  }
}

export default ContentArea;
