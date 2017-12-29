import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

import { App } from './App';
import { Signin } from './components/Session/Signin';
import Session from './components/Session/Session';
import { RequireAuth } from './Auth';


function AppRoute() {
  return (
    <Router>
      <div>
        { Cookies.get('myToken')
          ?
          <Route path={'/'} component={RequireAuth(App)} />
          :
          <Route path={'/'} component={Session} />
        }
      </div>
    </Router>
  );
}

export default AppRoute;
