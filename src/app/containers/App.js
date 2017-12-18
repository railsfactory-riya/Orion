import React, { Component } from "react";
import { connect } from "react-redux";

import { UserDetails } from "../components/UserDetails";
import { SignIn } from "../components/SignIn";
import { setEmail, setPassword } from "../actions/UserActions";

class App extends Component {
  render() {
    return (
      <div className="container">
        <SignIn
          clickSignIn={() => {
            this.props.setEmail("Riya"),
            this.props.setPassword("123riya")
          }} />
        <UserDetails
          email={this.props.userDetails.email}
          password={this.props.userDetails.password} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.userDetails
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEmail: (email) => {
      dispatch(setEmail(email));
    },
    setPassword: (password) => {
      dispatch(setPassword(password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
