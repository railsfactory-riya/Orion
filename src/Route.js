import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Error404 } from './components/Error/Error404';


// function requireAuth(nextState, replace) {
//  if (!loggedIn()) {
//  replace({pathname: '/'})
//  }
// }

function ContentAreaRoute(props) {
  return (
    <div>
      <Route path={'/Error404'} component={Error404} />
    </div>
  )
};

export default ContentAreaRoute;
