import React, { useState } from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Button } from '@mui/material';
import navimg1 from '../../../utils/podium.png'

const Navbar = () => {


    const navBtnStyle = {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '600', 
    };

    const activeBtn = {
  color: '#ffffff', 
};

const semiBoldPoppins = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '600',
};




  return (
    <div className='bg-[#151515] flex justify-between items-center py-[20px] lg:px-[5rem] md:px-[2rem] px-[1rem] relative sticky z-[9999] top-0'>
        <div className='text-white text-[1.4rem]' style={{...semiBoldPoppins}}>
            DOODLY
        </div>
        <div className='absolute flex items-center left-1/2 transform -translate-x-1/2 hidden lg:block'>
            <ul className='flex justify-center items-end text-[#AEAEAE] text-[0.8em] gap-[3.25rem] shrink-0' style={navBtnStyle}>
                <li style={activeBtn}>PLAY</li>
                <li className='flex gap-[0.2rem] justify-center items-end'><img src={navimg1} className='w-[1.5rem]'/> LEADERBOARD</li>
                <li>HOW TO PLAY?</li>
                <li>CONTACT US</li>
            </ul>
        </div>
        <span className='hidden lg:block'>
        <div  style={navBtnStyle} className='flex gap-[1rem] '>
          <button className='border-none text-[#C7C7C7] text-[0.8rem] shrink-0'>Sign Up</button>
          <button className='bg-[#6507FF] text-white text-[0.8em] px-[2.7em] py-[1em]  rounded-full shrink-0'>Launch</button>
        </div>
        </span>
        <div className=' block lg:hidden'>
          <div className='bg-[#2A2A2A] p-[1em] rounded-sm'>
            <DehazeIcon className='text-[#636363]'/>
          </div>
        </div>
    </div>
  )
}

export default Navbar