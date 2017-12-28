import React, { Component } from 'react';

export class Project extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Responsive Hover Table</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        Per Page&nbsp;
                        <span className="fa fa-caret-down"></span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>&emsp;Show per Page</li>
                        <li className="divider"></li>
                        <li><a href="#">10</a></li>
                        <li><a href="#">25</a></li>
                        <li><a href="#">50</a></li>
                        <li><a href="#">100</a></li>
                      </ul>
                    </div>
                    <input type="text" className="form-control" />
                    <span className="input-group-btn">
                      <button type="button" className="btn btn-info btn-flat">Go!</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-body table-responsive no-padding">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th style={{width: "30px"}}>ID</th>
                    <th style={{width: "150px"}}>User</th>
                    <th style={{width: "90px"}}>From Date</th>
                    <th style={{width: "90px"}}>To Date</th>
                    <th>Status</th>
                    <th style={{width: "150px"}}>Reporting Person</th>
                    <th style={{width: "150px"}}>Project Name</th>
                    <th>Project Details</th>
                  </tr>
                  <tr>
                    <td>183</td>
                    <td>John Doe</td>
                    <td>11-7-2014</td>
                    <td>11-7-2014</td>
                    <td><span className="label label-success">Allocated in house</span></td>
                    <td>Dinesh</td>
                    <td>Orion</td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>219</td>
                    <td>Alexander Pierce</td>
                    <td>11-7-2014</td>
                    <td>11-7-2014</td>
                    <td><span className="label label-warning">On hold</span></td>
                    <td>Dinesh</td>
                    <td>Orion</td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>657</td>
                    <td>Bob Doe</td>
                    <td>11-7-2014</td>
                    <td>11-7-2014</td>
                    <td><span className="label label-primary">Client location</span></td>
                    <td>Dinesh</td>
                    <td>Orion</td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>175</td>
                    <td>Mike Doe</td>
                    <td>11-7-2014</td>
                    <td>11-7-2014</td>
                    <td><span className="label label-danger">Free</span></td>
                    <td>Dinesh</td>
                    <td>Orion</td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="box-footer clearfix">
              <div className="row">
                <div className="col-sm-5">
                  <div>Showing 1 to 10 of 557 entries</div>
                </div>
                <div className="col-sm-7">
                  <div>
                    <ul className="pagination no-margin pull-right">
                      <li className="paginate_button previous disabled">
                        <a href="#">Previous</a>
                      </li>
                      <li className="paginate_button active">
                        <a href="#">1</a>
                      </li>
                      <li className="paginate_button ">
                        <a href="#">2</a>
                      </li>
                      <li className="paginate_button ">
                        <a href="#">3</a>
                      </li>
                      <li className="paginate_button ">
                        <a href="#">4</a>
                      </li>
                      <li className="paginate_button next" id="example1_next">
                        <a href="#" tabindex="0">Next</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
