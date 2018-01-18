import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { projectDetails } from '../../actions/Project';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      filter: null,
      search: null,
      search_item: ''
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.handleGoClick = this.handleGoClick.bind(this);
  }

  componentWillMount() {
    let input = {
      page: 1,
      filter: null,
      search: null
    };
    this.props.projectDetails(input);
   }

   //Pagination
   nextPage() {
     this.setState({page: this.state.page+1}, () => {
       this.props.projectDetails(this.state.page);
     });
     window.scrollTo(0, 0);
   }

   previousPage() {
     this.setState({page: this.state.page-1}, () => {
       this.props.projectDetails(this.state.page);
     });
     window.scrollTo(0, 0);
   }

   //Filter
   filter(value) {
     let input = {
       page: 1,
       filter: value,
       search: null
     };
     this.props.projectDetails(input);
   }

   //Search Box
   handleSearch(search_item, e) {
     this.setState({ search_item: e.target.value })
   }

   handleGoClick() {
     let input = {
       page: 1,
       filter: null,
       search: this.state.search_item
     };
     this.props.projectDetails(input);
   }


  render() {
    let project_details = [];
    let user_details = (this.props.projectDetailsReducer && this.props.projectDetailsReducer.project_details) ? this.props.projectDetailsReducer.project_details.users : [];
    for(var i = 0; i < user_details.length; i++) {
      project_details = (this.props.projectDetailsReducer && this.props.projectDetailsReducer.project_details) ? this.props.projectDetailsReducer.project_details.users[i].projects : [];
    }
    let page_no = (user_details && user_details.length > 10) ? (user_details.length % 10) : 1 ;
    console.log(user_details);
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Project Allocation Details</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-group margin">
                    <input type="text" className="form-control" onChange={this.handleSearch.bind(this, "search_item")} value={this.state.search_item}/>
                    <span className="input-group-btn">
                      <button type="button" className="btn btn-info btn-flat" onClick={this.handleGoClick}>Go!</button>
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="margin">
                    <div className="btn-group pull-right">
                      <button type="button" className="btn btn-danger">Status Filter</button>
                      <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                        <span className="caret"></span>
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Allocated Internally</a></li>
                        <li><a href="#" onClick={this.filter.bind(this, "Allocated")}>Allocated</a></li>
                        <li><a href="#" onClick={this.filter.bind(this, "Bench")}>Bench</a></li>
                        <li className="divider"></li>
                        <li><a href="#"onClick={this.filter.bind(this, null)}>Remove Filter</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-body table-responsive no-padding">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th style={{width: "30px"}}>ID</th>
                    <th style={{width: "200px"}}>User</th>
                    <th style={{width: "200px"}}>Project Name</th>
                    <th style={{width: "90px"}}>From Date</th>
                    <th style={{width: "90px"}}>To Date</th>
                    <th>Status</th>
                    <th style={{width: "200px"}}>Reporting Person</th>
                    <th style={{width: "100px"}}>Depertment</th>
                  </tr>
                  { user_details.map((values,key) => {
                    return (
                      <tr key={key}>
                        <td>{values.emp_code}</td>
                        <td>{values.firstname} {values.lastname}</td>
                        <td>
                          { project_details.map((values,key) => {
                              return (<p key={key}>{values.name}</p>)
                          })}
                        </td>
                        <td>
                          { project_details.map((values,key) => {
                              return (<p key={key}>{values.start_date}</p>)
                          })}
                        </td>
                        <td>
                          { project_details.map((values,key) => {
                              return (<p key={key}>{values.end_date}</p>)
                          })}
                        </td>
                        <td>
                          { values.user_status === "Allocated"
                            ?
                            <span className="label label-primary">{values.user_status}</span>
                            :
                            <span className="label label-warning">Free</span>
                          }
                        </td>
                        <td>
                          { project_details.map((values,key) => {
                          })}
                        </td>
                        <td>{values.department_name}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className="box-footer clearfix">
              <div className="row">
                <div className="col-sm-5">
                  <div>Showing 1 to {user_details.length >= 10 ? 10 : user_details.length} of {user_details.length} entries</div>
                </div>
                <div className="col-sm-7">
                  <div>
                    <ul className="pagination no-margin pull-right">
                      { page_no > 1
                        ?
                        <li className="paginate_button previous">
                          <a href="#" onClick={this.previousPage}>Previous</a>
                        </li>
                        :
                        <li className="paginate_button previous disabled">
                          <a href="#">Previous</a>
                        </li>
                      }
                      { this.state.page = 1
                        ?
                        <li className="paginate_button active">
                          <a href="#">1</a>
                        </li>
                        :
                        <li className="paginate_button">
                          <a href="#">1</a>
                        </li>
                      }
                      { page_no > 1
                        ?
                        (<li className="paginate_button">
                          <a href="#">{page_no}</a>
                        </li>)
                        :
                        null
                      }
                      { page_no <= 1
                        ?
                        <li className="paginate_button next">
                          <a href="#" onClick={this.nextPage}>Next</a>
                        </li>
                        :
                        <li className="paginate_button next disabled">
                          <a href="#">Next</a>
                        </li>
                      }
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

export default connect(mapStateToProps, mapDispatchToProps)(Project);
