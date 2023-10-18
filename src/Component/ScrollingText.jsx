import React, { useEffect } from 'react';
import Marquee from "react-fast-marquee";
import StarIcon from '@mui/icons-material/Star';
const ScrollingText = () => {
  return (
    <div className='  scrolling-text-container bg-[#6507FF] py-[2rem] overflow-hidden text-white text-[3.5rem]'>
      <Marquee>
      <div>
      
      <span class='text-center icon '></span><span class='font-extrabold'>  PLAY</span> <span class='font-style: italic'>SOLVE</span> <span class='font-extrabold text-outline stroke'>DOODLE!! </span> <span class='font-style: italic'>UNLEASH</span> <span class='font-extrabold stroke'>YOUR</span> <span class='font-extrabold'>DOODLE</span> <span class='font-weight: 700'>INTO</span> <span class='font-style: italic'>REALITY</span>
      </div>
      </Marquee>
    </div>
  );
};

export default ScrollingText;
