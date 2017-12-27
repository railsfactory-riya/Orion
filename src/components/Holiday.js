import React, { Component } from 'react';

export class Holiday extends Component {
  render() {
    return (
      <div className="row">
        <h2>&emsp;Calendar</h2>
        <div className="col-md-4">
          <div className="box box-solid">
            <div className="box-header">
              <h3 className="box-title">Holiday List</h3>
            </div>
            <div className="box-body no-padding">
              <table className="table table-bordered table-striped">
                <tbody>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td><span className="badge bg-red">2017-12-25</span></td>
                    <td>Christmas</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-yellow">2017-10-18</span></td>
                    <td>Deepavalli</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-light-blue">2017-10-02</span></td>
                    <td>Gandhi Jayanthi</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-green">2017-09-28</span></td>
                    <td>Ayudha Pooja</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-red">2017-12-25</span></td>
                    <td>Christmas</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-yellow">2017-10-18</span></td>
                    <td>Deepavalli</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-light-blue">2017-10-02</span></td>
                    <td>Gandhi Jayanthi</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-green">2017-09-28</span></td>
                    <td>Ayudha Pooja</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="box box-primary">
            <div className="box-body no-padding">
              <div id="calendar"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
