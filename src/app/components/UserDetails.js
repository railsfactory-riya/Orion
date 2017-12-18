import React from "react";

export const UserDetails = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h1>The User Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <p>Email: {props.email}</p>
          <p>Password: {props.password}</p>
        </div>
      </div>
    </div>
  );
}
