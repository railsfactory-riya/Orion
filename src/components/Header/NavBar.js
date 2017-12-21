import React from 'react';
import ProfileTab from './ProfileTab';
import ChangePassword from './ChangePassword';

function NavBar() {
  const user = {
    name: "User Name",
    description: "Description"
  }
  return (
    <nav className="navbar navbar-static-top">
      <a href="/" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <ProfileTab user={user}/>
          <ChangePassword />
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;
