import React from 'react';
import Common from './Common';
import web from '../src/images/img1.jpg';
const Home=()=>{
  return (<>
 <Common  name='Grow your business with' imgsrc={web} visit='/services' btname='get started' />
  </>);
};
export default Home;