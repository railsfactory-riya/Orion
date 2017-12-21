import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { App } from './App';
import { DashBoard } from './components/DashBoard/DashBoard';
import { EmployeeDetails } from './components/EmployeeInfo/EmployeeDetails';
import { HRManagement } from './components/HRManagement/HRManagement';
import { MyDetails } from './components/MyPage/MyDetails';
import { Project } from './components/Project/Project';


export class AppRoute extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={'/'} component={App} />
          <Route path={'/DashBoard'} component={DashBoard} />
          <Route path={'/EmployeeDetails'} component={EmployeeDetails} />
          <Route path={'/HRManagement'}  component={HRManagement} />
          <Route path={'/MyDetails'} component={MyDetails} />
          <Route path={'/Project'} component={Project} />
        </div>
      </Router>
    );
  }
}
