import React from 'react';
import { Route } from 'react-router-dom';

import { Signin } from './Signin';
import { ForgotPassword } from './ForgotPassword';

function Session() {
  return (
    <div style={{background:'#d2d6de'}}>
      <Route exact path={'/'} component={Signin} />
      <Route path={'/ForgotPassword'} component={ForgotPassword} />
    </div>
  )
}

export default Session;
