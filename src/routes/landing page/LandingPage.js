import React from 'react'
import Section1 from './sections/Section1'
import Navbar from './Navbar/Navbar'
import Section2 from './sections/Section2'
import Section3 from './sections/Section3'
import ScrollingText from '../../Component/ScrollingText'
import Section4 from './sections/Section4'

const LandingPage = ({socket,setFinding}) => {
  return (
    <div className=''>
        <Navbar/>
    <div className='relative'>
      <Section1 socket={socket} setFinding={setFinding}/>
      </div>
      <Section2/>
      <ScrollingText/>
      {/* <Section3/> */}
      <Section4/>
    </div>
  )
}

export default LandingPage