import React from 'react';
import { Link } from "react-router-dom";

function SideBar(props) {
  return (
    <aside className="main-sidebar" style={{bottom: "0 !important"}}>
      <section className="sidebar" style={{height: "auto"}}>
        <div className="user-panel">
          <div className="pull-left image">
            <img src="dist/img/riya.jpg" className="img-circle" alt="User Image" />
          </div>
          <div className="pull-left info">
            <p>Riya Kapuria</p>
            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
          </div>
        </div>
        <form action="#" method="get" className="sidebar-form">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search..." />
            <span className="input-group-btn">
              <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                <i className="fa fa-search"></i>
              </button>
            </span>
          </div>
        </form>
        <ul className="sidebar-menu tree" data-widget="tree">
          <li className="header">MAIN NAVIGATION</li>
          <li>
            <Link to="/">
              <i className="fa fa-dashboard"></i> <span> Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/Holiday">
              <i className="fa fa-calendar"></i> <span> Holiday Calendar</span>
            </Link>
          </li>
          <li className="treeview">
            <a href="#">
              <i className="fa fa-user"></i> <span> My Page</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul className="treeview-menu">
              <li><Link to="/PersonalDetails"><i className="fa fa-circle-o"></i> Personal Details</Link></li>
              <li><Link to="/ProfessionalDetails"><i className="fa fa-circle-o"></i> Professional Details</Link></li>
              <li><Link to="/ContactDetails"><i className="fa fa-circle-o"></i> Contact Details</Link></li>
              <li><Link to="/Skills"><i className="fa fa-circle-o"></i> Skills</Link></li>
              <li><Link to="/Certificates"><i className="fa fa-circle-o"></i> Certificates</Link></li>
              <li><Link to="/Leave"><i className="fa fa-circle-o"></i> Leave</Link></li>
              <li><Link to="/MyAllocation"><i className="fa fa-circle-o"></i> My Allocation</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/Project">
              <i className="fa fa-briefcase"></i> <span> Project</span>
            </Link>
          </li>
          <li>
            <Link to="/EmployeeDetails">
              <i className="fa fa-users"></i> <span> Employee Info</span>
            </Link>
          </li>
          <li className="treeview">
            <a href="#">
              <i className="fa fa-user"></i> <span> HR Management</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul className="treeview-menu">
              <li><Link to="/Policies"><i className="fa fa-circle-o"></i> Policies</Link></li>
              <li>
                <Link to="/Announcements">
                  <i className="fa fa-circle-o"></i>
                  <span> Announcements</span>
                  <span className="pull-right-container">
                    <small className="label pull-right bg-yellow">2</small>
                  </span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </aside>
  )
}

export default SideBar;
