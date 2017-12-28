import React, { Component } from 'react';

export class Signin extends Component {
  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="#"><b>Orion</b>Application</a>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form action="#l" method="post">
            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="Email" />
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Password" />
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <button type="submit" className="btn btn-primary btn-flat pull-right">Sign In</button>
              </div>
            </div>
          </form>
          <a href="#">I forgot my password</a><br />
          <a href="register.html" className="text-center">Register a new membership</a>
        </div>
      </div>
    );
  }
}
