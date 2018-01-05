import React, { Component } from 'react';
import { connect } from "react-redux";

import { empDetails } from '../../actions/User';

class ProfessionalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    this.props.empDetails()
   }

  render() {
    return (
      <div>
        <div className="box box-widget widget-user-2">
          <div className="widget-user-header bg-yellow">
            <div className="widget-user-image">
              <img className="img-circle" src="../dist/img/riya.jpg" alt="User Avatar" />
            </div>
            <h3 className="widget-user-username">Riya Kapuria</h3>
            <h5 className="widget-user-desc">Jr. Software Developer</h5>
          </div>
          <div className="box box-default">
            <div className="box-header with-border">
              <h3 className="box-title">Professional Details</h3>
            </div>
            <div className="box-body">
              <strong>Email</strong>
              <p className="text-muted">riya@railsfactory.org</p>
              <hr />
              <strong>Salary Account</strong>
              <br /><br />
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Payment Mode</th>
                    <th>Bank Branch</th>
                    <th>Account Number</th>
                    <th>Bank Name</th>
                    <th>Pan Number</th>
                  </tr>
                  <tr>
                    <td>Bank</td>
                    <td>Ashok Pillar</td>
                    <td></td>
                    <td>HDFC</td>
                    <td>DUQPK8858F</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <strong>Department</strong>
              <p className="text-muted">Solution Center B</p>
              <hr />
              <strong>Designation</strong>
              <p className="text-muted">Jr.Software Engineer</p>
              <hr />
              <strong>Date of joining</strong>
              <p className="text-muted">11 July, 2016</p>
              <hr />
              <strong>Total Experience</strong>
              <p className="text-muted">1year(s):6months(s)</p>
              <hr />
              <strong>Education Qualification</strong>
              <br /><br />
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>University/College</th>
                    <th>Program</th>
                    <th>Specialization</th>
                    <th>Year</th>
                    <th>Percentage/GPA</th>
                  </tr>
                  <tr>
                    <td>MAKAUT</td>
                    <td>B.Tech</td>
                    <td>CSE</td>
                    <td>May-2012</td>
                    <td>7.8</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <strong>Skills</strong>
              <br /><br />
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Skill Type</th>
                    <th>Category</th>
                    <th>Skill</th>
                    <th>Rating</th>
                    <th>Remarks</th>
                  </tr>
                  <tr>
                    <td>Primary</td>
                    <td>Web Design</td>
                    <td>Wireframes</td>
                    <td>9</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <strong>No Certificates</strong>
              <p className="text-muted">NA</p>
              <hr />
              <strong>Languages</strong>
              <br /><br />
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Language</th>
                    <th>Read</th>
                    <th>Write</th>
                    <th>Speak</th>
                  </tr>
                  <tr>
                    <td>English</td>
                    <td>true</td>
                    <td>true</td>
                    <td>true</td>
                  </tr>
                  <tr>
                    <td>Hindi</td>
                    <td>true</td>
                    <td>false</td>
                    <td>true</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
    empDetails: (personal_details) => {
      dispatch(empDetails(personal_details));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalDetails);
