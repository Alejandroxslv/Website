import React from 'react';

import AppProfile from '../components/home/profile';
import AppExperience from '../components/home/experience';
import AppProjects from '../components/home/projects';
import AppContact from '../components/home/contact'; 

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