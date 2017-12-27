import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class SingleEmployee extends Component {
  render() {
    return (
      <div>
        <section className="content-header">
          <Link to="/EmployeeDetails">
            <button type="button" className="btn bg-maroon margin">
              <i className="fa fa-chevron-left"></i> <span> Back</span>
            </button>
          </Link>
          <ol className="breadcrumb">
            <li><Link to="/"><i className="fa fa-dashboard"></i> Home</Link></li>
            <li><Link to="/EmployeeDetails">Employee Info</Link></li>
            <li className="active">Employee Details</li>
          </ol>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-4">
              <div className="box box-widget widget-user-2">
                <div className="widget-user-header bg-yellow">
                  <div className="widget-user-image">
                    <img className="img-circle" src="../dist/img/riya.jpg" alt="User Avatar" />
                  </div>
                  <h3 className="widget-user-username">Riya Kapuria</h3>
                  <h5 className="widget-user-desc">Jr. Software Developer</h5>
                </div>
                <div className="box-footer no-padding">
                  <ul className="nav nav-stacked">
                    <li><a href="#">Projects <span className="pull-right badge bg-blue">31</span></a></li>
                    <li><a href="#">Tasks <span className="pull-right badge bg-aqua">5</span></a></li>
                    <li><a href="#">Completed Projects <span className="pull-right badge bg-green">12</span></a></li>
                    <li><a href="#">Followers <span className="pull-right badge bg-red">842</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8">
            <div className="box box-primary">
              <div className="box-header with-border">
                <h3 className="box-title">About Me</h3>
              </div>
              <div className="box-body">
                <strong>Employee code</strong>
                <p className="text-muted">0454</p>
                <hr />
                <strong>Username</strong>
                <p className="text-muted">riya</p>
                <hr />
                <strong>Firstname</strong>
                <p className="text-muted">Riya</p>
                <hr />
                <strong>Lastname</strong>
                <p className="text-muted">Kapuria</p>
                <hr />
                <strong>Education</strong>
                <p className="text-muted">RCC Institute of Information Technology</p>
                <hr />
                <strong>Gender</strong>
                <p className="text-muted">Female</p>
                <hr />
                <strong>Marital Status</strong>
                <p className="text-muted">Single</p>
                <hr />
                <strong>Date of Birth</strong>
                <p className="text-muted">30 August, 1994</p>
                <hr />
                <strong>Blood Group</strong>
                <p className="text-muted">O Positive</p>
                <hr />
                <strong>Total Experience</strong>
                <p className="text-muted">1year(s):6months(s)</p>
              </div>
            </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
