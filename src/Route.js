import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { DashBoard } from './components/DashBoard/DashBoard';
import EmployeeDetails from './components/EmployeeInfo/EmployeeDetails';
import { SingleEmployee } from './components/EmployeeInfo/SingleEmployee';
import { Policies } from './components/HRManagement/Policies';
import { Announcements } from './components/HRManagement/Announcements';
import PersonalDetails from './components/MyPage/PersonalDetails';
import ProfessionalDetails from './components/MyPage/ProfessionalDetails';
import { ContactDetails } from './components/MyPage/ContactDetails';
import Skills from './components/MyPage/Skills';
import { Certificates } from './components/MyPage/Certificates';
import { Leave } from './components/MyPage/Leave';
import { MyAllocation } from './components/MyPage/MyAllocation';
import { Project } from './components/Project/Project';
import { Holiday } from './components/Holiday';


function ContentAreaRoute(props) {
  return (
    <div>
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
};

export default ContentAreaRoute;
