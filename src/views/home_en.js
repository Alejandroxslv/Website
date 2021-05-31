import React from 'react';

import AppProfile from '../components/home/profile_en';
import AppExperience from '../components/home/experience_en';
import AppProjects from '../components/home/projects_en';
import AppContact from '../components/home/contact_en'; 

function AppHome() {
  return (
    <div className="main">
      {/* <AppHero/> */}
      {/* <AppAbout/> */}
      <AppProfile/>
      <AppExperience/>
      <AppProjects/>
      <AppContact/>
    </div>
  );
}

export default AppHome;