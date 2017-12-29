import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Signin extends Component {
  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <b>Orion</b>Application
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form method="post">
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
          <Link to="/ForgotPassword">I forgot my password</Link>
        </div>
      </div>
    );
  }
}
