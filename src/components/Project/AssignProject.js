import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';

import { projectDetails } from '../../actions/Project';

class AssignProject extends Component {
  constructor(props) {
    let to_date = new Date().setDate(new Date().getDate() + 1)
    super(props);
    this.state = {
      fields: {
        empid: '',
        empname: '',
        projectname: '',
        reportingperson: '',
        empdepertment: '',
        empstatus: 'Allocated'
      },
      filter_item: null,
      search_item: '',
      activePage: 1,
      fromDate: new Date(),
      toDate: new Date()
    };
    this.handleGoClick = this.handleGoClick.bind(this);
  }

  // componentWillMount() {
  //   let input = {
  //     page: this.state.activePage,
  //     filter: this.state.filter_item,
  //     search: null
  //   };
  //   this.props.projectDetails(input);
  // }

   //Filter
  filter(value) {
   this.setState ({filter_item: value}, () => {
    this.props.projectDetails ({
      page: this.state.activePage,
      filter: this.state.filter_item,
      search: null
    });
   });
  }

  //Search Box
  handleSearch(search_item, e) {
   this.setState ({search_item: e.target.value})
  }

  handleGoClick() {
   this.setState ({
     activePage: 1,
     filter_item: null,
     search_item: this.state.search_item
   }, () => {
    this.props.projectDetails ({
      page: this.state.activePage,
      filter: this.state.filter_item,
      search: this.state.search_item
    });
   });
   window.scrollTo(0, 0);
  }

  //Date filter
  onFromDate(fromDate) {
    this.setState({ fromDate });
    console.log(fromDate);
  }
  onToDate = toDate => this.setState({ toDate })

  //Input change
  onChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({fields});
    console.log(fields);
  }

  //Search Employee by Name
  handleSearch(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState ({
      activePage: 1,
      filter_item: null,
      search_item: e.target.value
    }, () => {
     this.props.projectDetails ({
       page: this.state.activePage,
       filter: this.state.filter_item,
       search: this.state.search_item
     });
    });
  }


  render() {
    let user_details =
    (this.props.projectDetailsReducer && this.props.projectDetailsReducer.project_details) ?
    user_details = this.props.projectDetailsReducer.project_details.users : []
    console.log(user_details[0]);
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title"><b>Assign Projects To Employees</b></h3>
            </div>
            <div className="box-body">
              <div className="row">
                <div className="col-xs-6">
                  <div className="input-group">
                    <span style={{color: "#3c8dbc"}} className="input-group-addon">@</span>
                    { !user_details[0]
                      ?
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Employee ID"
                        value={this.state.fields["empid"]}
                        onChange={this.onChange.bind(this, "empid")}
                       />
                       :
                       <input
                         type="number"
                         className="form-control"
                         placeholder="Employee ID"
                         value={user_details[0].emp_code}
                         onChange={this.onChange.bind(this, "empid")}
                        />
                      }
                  </div>
                  <br />
                  <div className="input-group">
                    <span style={{color: "#3c8dbc"}} className="input-group-addon"><i className="fa fa-user"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Employee Name"
                      value={this.state.fields["empname"]}
                      onChange={this.handleSearch.bind(this, "empname")}
                    />
                  </div>
                  <br />
                  <div className="input-group">
                    <span style={{color: "#3c8dbc"}} className="input-group-addon"><i className="fa fa-briefcase"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Project Name"
                      value={this.state.fields["projectname"]}
                      onChange={this.onChange.bind(this, "projectname")}
                     />
                  </div>
                  <br />
                  <div className="input-group">
                    <span style={{color: "#3c8dbc"}} className="input-group-addon"><i className="fa fa-male"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Reporting Person"
                      value={this.state.fields["reportingperson"]}
                      onChange={this.onChange.bind(this, "reportingperson")}
                    />
                  </div>
                  <br />
                  <div className="input-group">
                    <span style={{color: "#3c8dbc"}} className="input-group-addon"><i className="fa fa-desktop"></i></span>
                    { !user_details[0]
                      ?
                      <input
                        readOnly
                        type="text"
                        className="form-control"
                        placeholder="Depertment"
                        value={this.state.fields["empdepertment"]}
                        onChange={this.onChange.bind(this, "empdepertment")}
                      />
                      :
                      <div className="form-control">
                        {user_details[0].department_name}
                      </div>
                    }
                  </div>
                  <br />
                </div>
                <div className="col-xs-6">
                  <div className="form-group">
                    <label style={{color: "#3c8dbc"}}>Status</label>
                    <select
                      className="form-control select2 select2-hidden-accessible"
                      aria-hidden="true"
                      value={this.state.fields["empstatus"]}
                      onChange={this.onChange.bind(this, "empstatus")}
                    >
                      <option value="selected">Allocated</option>
                      <option>Allocated Internally</option>
                      <option>Bench</option>
                    </select>
                  </div>
                  <br/>
                  <div className="form-group">
                    <label style={{color: "#3c8dbc"}}>From Date</label>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <label style={{color: "#3c8dbc"}}>To Date</label>
                    <br />
                    <DatePicker
                      onChange={this.onFromDate.bind(this)}
                      value={this.state.fromDate}
                    />
                    &emsp;
                    <DatePicker
                      onChange={this.onToDate.bind(this)}
                      value={this.state.toDate}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="box-footer">
              <div className="row">
                <div className="col-xs-6">
                  <button type="submit" className="btn btn-warning pull-right"><b>Cancel</b></button>
                </div>
                <div className="col-xs-6">
                  <button type="submit" className="btn btn-info"><b>Sign in</b></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projectDetailsReducer: state.projectDetailsReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    projectDetails: (user_details) => {
      dispatch(projectDetails(user_details));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignProject);
