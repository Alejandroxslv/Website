import React from 'react';

import AppProfile from '../components/home/profile';
import AppExperience from '../components/home/experience';
import AppProjects from '../components/home/projects';
import AppContact from '../components/home/contact'; 
import AppPricing from '../components/home/pricing'; 

function AppHome() {
  return (
    <div className="main">
      {/* <AppAbout/> */}
      <AppProfile/>
      <AppExperience/>
      {/* <AppPricing/> */}
      <AppProjects/>
      
      <AppContact/> 
    </div>
  );
}

export default AppHome;