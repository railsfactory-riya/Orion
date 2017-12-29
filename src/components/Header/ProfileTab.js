import React from 'react';
import { Link } from 'react-router-dom';

function ProfileTab(props) {
    const userDetails = props.user
    return (
      <li className="dropdown user user-menu">
        <a href="/" className="dropdown-toggle" data-toggle="dropdown">
          <img src="dist/img/riya.jpg" className="user-image" alt="User"/>
          <span className="hidden-xs">{userDetails.name}</span>
        </a>
        <ul className="dropdown-menu">
          <li className="user-header">
            <img src="dist/img/riya.jpg" className="img-circle" alt="User"/>
            <p>
              {userDetails.name}
              <small>{userDetails.description}</small>
            </p>
          </li>
          <li className="user-footer">
            <div className="pull-left">
              <Link to="/PersonalDetails" className="btn btn-default btn-flat">Profile</Link>
            </div>
            <div className="pull-right">
              <Link to="/" className="btn btn-default btn-flat">Sign out</Link>
            </div>
          </li>
        </ul>
      </li>
    )
}

export default ProfileTab;
