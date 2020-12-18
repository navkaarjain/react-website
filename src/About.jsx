import React from 'react';
import web from '../src/images/img5.jpg'
import Common from './Common';

const About=()=>{
  return (<>
  <Common name=' welcome to about page ' imgsrc={web} visit='/contact' btname='Contact Now' />
  </>);
};
export default About;