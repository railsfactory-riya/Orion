import React, { Component } from 'react';

export class Leave extends Component {
  render() {
    return (
      <div>
        <section className="content-header">
          <h1>Leave Management</h1>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-3">
              <div className="box box-primary">
                <div className="box-body box-profile">
                  <img className="profile-user-img img-responsive img-circle" src="../../dist/img/riya.jpg" alt="User profile picture" />
                  <h3 className="profile-username text-center">Riya Kapuria</h3>
                  <p className="text-muted text-center">Jr. Software Engineer</p>
                  <ul className="list-group list-group-unbordered">
                    <li className="list-group-item">
                      <b>Allocated Projects</b> <a className="pull-right">3</a>
                    </li>
                    <li className="list-group-item">
                      <b>Leave Balance</b> <a className="pull-right">8</a>
                    </li>
                    <li className="list-group-item">
                      <b>Reporting Person</b> <a className="pull-right">Shiv</a>
                    </li>
                  </ul>
                  <a href="#" className="btn btn-primary btn-block"><b>Apply Leave</b></a>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="nav-tabs-custom">
                <ul className="nav nav-tabs">
                  <li className="active"><a href="#ls" data-toggle="tab">Leave Summary</a></li>
                  <li><a href="#tls" data-toggle="tab">Total Leave Summary</a></li>
                  <li><a href="#hol" data-toggle="tab">History of Leave</a></li>
                </ul>
                <div className="tab-content">
                  <div className="active tab-pane" id="ls">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <th>Type of Leave</th>
                          <th style={{width: "100px"}}>Casual Leave</th>
                        </tr>
                        <tr>
                          <td>Carry Forward Leave</td>
                          <td><small className="label label-danger">NA</small></td>
                        </tr>
                        <tr>
                          <td>Available Leave</td>
                          <td><small className="label label-info">2</small></td>
                        </tr>
                        <tr>
                          <td>Total Available Leave</td>
                          <td><small className="label label-warning">2</small></td>
                        </tr>
                        <tr>
                          <td>Leave Approved</td>
                          <td><small className="label label-success">0</small></td>
                        </tr>
                        <tr>
                          <td>Pending Approval</td>
                          <td><small className="label label-primary">0</small></td>
                        </tr>
                        <tr>
                          <td>Leave Balance</td>
                          <td><small className="label label-default">8</small></td>
                        </tr>
                        <tr>
                          <td>Leave On LOP</td>
                          <td><small className="label label-danger">0</small></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="tab-pane" id="tls">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <th>Type of Leave</th>
                          <th style={{width: "100px"}}>Casual Leave</th>
                        </tr>
                        <tr>
                          <td>Total Carry Forward Leave</td>
                          <td><small className="label label-danger">NA</small></td>
                        </tr>
                        <tr>
                          <td>Total Available Leave</td>
                          <td><small className="label label-warning">2</small></td>
                        </tr>
                        <tr>
                          <td>Total Available Leave</td>
                          <td><small className="label label-info">2</small></td>
                        </tr>
                        <tr>
                          <td>Total Leave Approved</td>
                          <td><small className="label label-success">0</small></td>
                        </tr>
                        <tr>
                          <td>Total Pending Approval</td>
                          <td><small className="label label-primary">0</small></td>
                        </tr>
                        <tr>
                          <td>Total Leave Balance</td>
                          <td><small className="label label-default">8</small></td>
                        </tr>
                        <tr>
                          <td>Total Leave On LOP</td>
                          <td><small className="label label-danger">0</small></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="tab-pane" id="hol">
                    <p>No leave history.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
