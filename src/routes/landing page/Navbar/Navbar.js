import React, { useState } from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Button } from '@mui/material';
import navimg1 from '../../../utils/podium.png'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { token } = useSelector((state) => state.auth)

  const loggedIn = token===null?0:1;
  console.log(loggedIn);

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
    <div className='bg-[#151515] flex justify-between items-center py-[20px] lg:px-[5rem] md:px-[2rem] px-[1rem] relative sticky z-[9999] top-0 select-none'>
        <div className='text-white text-[1.4rem] cursor-default' style={{...semiBoldPoppins}}>
            DOODLY
        </div>
        <div className='absolute flex items-center left-1/2 transform -translate-x-1/2 hidden lg:block'>
            <ul className='flex justify-center items-end text-[#AEAEAE] text-[0.8em] gap-[3.25rem] shrink-0 cursor-pointer ' style={navBtnStyle}>
                <li style={activeBtn}>PLAY</li>
                <li className='flex gap-[0.2rem] justify-center items-end hover:text-white transition delay-75'><img src={navimg1} className='w-[1.5rem]'/> LEADERBOARD</li>
                <li className='hover:text-white transition delay-75'>HOW TO PLAY?</li>
                <li className='hover:text-white transition delay-75'>CONTACT US</li>
            </ul>
        </div>
        <span className='hidden lg:block'>
        <div  style={navBtnStyle} className='flex gap-[1rem] '>
          <Link to={loggedIn?'/dashboard':'/auth'} className='flex justify-center'><button className='border-none text-[#C7C7C7] text-[0.8rem] shrink-0 hover:text-white transition delay-75'>{loggedIn?'Profile':'Sign Up'}</button></Link>
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