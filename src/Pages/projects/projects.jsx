import React from 'react';
import Home from '../../Components/projects/home/home';
import Projects from '../../Components/projects/home/projects';
import { OurCustomer } from '../../Components/global/our-customer/OurCustomer'


function Project() {
  return (
    <div>
      <Home />
      <Projects />
      <OurCustomer />
    </div>
  );
}

export default Project;
