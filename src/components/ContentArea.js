import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { DashBoard } from './DashBoard/DashBoard';
import { EmployeeDetails } from './EmployeeInfo/EmployeeDetails';
import { SingleEmployee } from './EmployeeInfo/SingleEmployee';
import { Policies } from './HRManagement/Policies';
import { Announcements } from './HRManagement/Announcements';
import { PersonalDetails } from './MyPage/PersonalDetails';
import { ProfessionalDetails } from './MyPage/ProfessionalDetails';
import { ContactDetails } from './MyPage/ContactDetails';
import { Skills } from './MyPage/Skills';
import { Certificates } from './MyPage/Certificates';
import { Leave } from './MyPage/Leave';
import { MyAllocation } from './MyPage/MyAllocation';
import { Project } from './Project/Project';
import { Holiday } from './Holiday';

class ContentArea extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <Route exact path={'/'} component={DashBoard} />
        <Route path={'/EmployeeDetails'} component={EmployeeDetails} />
        <Route path={'/SingleEmployee'} component={SingleEmployee} />
        <Route path={'/Policies'}  component={Policies} />
        <Route path={'/Announcements'}  component={Announcements} />
        <Route path={'/PersonalDetails'} component={PersonalDetails} />
        <Route path={'/ProfessionalDetails'} component={ProfessionalDetails} />
        <Route path={'/ContactDetails'} component={ContactDetails} />
        <Route path={'/Skills'} component={Skills} />
        <Route path={'/Certificates'} component={Certificates} />
        <Route path={'/Leave'} component={Leave} />
        <Route path={'/MyAllocation'} component={MyAllocation} />
        <Route path={'/Project'} component={Project} />
        <Route path={'/Holiday'} component={Holiday} />
      </div>
    )
  }
}

export default ContentArea;
