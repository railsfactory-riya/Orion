import React, { Component } from 'react';

export class PersonalDetails extends Component {
  render() {
    return (
      <div>
        <section className="content-header">
          <h1>Personal Details
            <a className="btn pull-right">
              <i className="fa fa-edit"></i> Edit Profile
            </a>
          </h1>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="box box-info">
                <div className="box-body box-profile">
                  <img className="profile-user-img img-responsive img-circle" src="../../dist/img/riya.jpg" alt="User profile picture" />
                  <h3 className="profile-username text-center">Riya Kapuria</h3>
                  <p className="text-muted text-center">Software Engineer</p>
                </div>
              </div>
              <div className="box  box-warning">
                <div className="box-header with-border">
                  <h3 className="box-title">Leave Information</h3>
                </div>
                <div className="box-body">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th>Type of Leave</th>
                        <th>Percentage</th>
                        <th style={{width: "100px"}}>Casual Leave</th>
                      </tr>
                      <tr>
                        <td>Carry Forward Leave</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-danger" style={{width: "55%"}}></div>
                          </div>
                        </td>
                        <td><span className="badge bg-red">55%</span></td>
                      </tr>
                      <tr>
                        <td>Leave in this quarter</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-yellow" style={{width: "70%"}}></div>
                          </div>
                        </td>
                        <td><span className="badge bg-yellow">70%</span></td>
                      </tr>
                      <tr>
                        <td>Pending Approval</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar progress-bar-primary" style={{width: "30%"}}></div>
                          </div>
                        </td>
                        <td><span className="badge bg-light-blue">30%</span></td>
                      </tr>
                      <tr>
                        <td>Leave Approved	</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar progress-bar-success" style={{width: "90%"}}></div>
                          </div>
                        </td>
                        <td><span className="badge bg-green">90%</span></td>
                      </tr>
                      <tr>
                        <td>Remaining Leave Balance</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-danger" style={{width: "55%"}}></div>
                          </div>
                        </td>
                        <td><span className="badge bg-red">55%</span></td>
                      </tr>
                      <tr>
                        <td>Leave On LOP</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar progress-bar-primary" style={{width: "30%"}}></div>
                          </div>
                        </td>
                        <td><span className="badge bg-light-blue">30%</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box box-success">
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
