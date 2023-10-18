import React from 'react';
// import video1 from '../utils/video1.mp4';
import { Fade } from 'react-reveal';

// notes
/* Not responsive for small devices and other responsive ness issues */

const Section3 = () => {
  const semiBoldPoppins = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600',
  };

  const regularPoppins = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '400',
  };

  const mediumPoppins = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '500',
  };

  return (
    <div>
      <div className='bg-[#101010] relative z-[-9999] flex flex-col md:flex-row justify-center lg:gap-[5rem] md:gap-[4rem] text-white items-center w-[100%] lg:p-[5rem] md:p-[4rem] '>
        <Fade bottom>
          <div className='flex items-center justify-center lg:w-[50%]'>
            <div>
              <h1 style={{ ...semiBoldPoppins }} className='lg:text-[2.2rem] md:text-[2rem]'>
                Augmented Reality
              </h1>
              <p style={{ ...mediumPoppins }} className='lg:text-[0.9rem] md:text-[0.8rem]'>
              Our project embarks on a mission to transform this imaginative vision into a tangible reality.
              </p>
            </div>
          </div>
          <div className='flex justify-center items-center lg:text-[1rem] md:text-[0.7rem]'>
            <div className='flex lg:gap-[2rem] md:gap-[1.5rem]' style={{...mediumPoppins}}>
              <button className='rounded-full px-[2rem]  py-[1rem] bg-[#6507FF] '>
                Try AR MODE
              </button>
              <button className='border-solid border-[1px] border-[#373737] text-[#817A7A] rounded-full px-[2rem] py-[1rem] '>
                Sign Up
              </button>
            </div>
          </div>
        </Fade>
      </div>
      <div className='h-[50vh] w-[100vw] overflow-hidden rounded-[10px] overflow-hidden'>
        {/* <video
          src={video1}
          autoPlay
          muted
          loop
          playsInline
          className='w-full h-full object-cover'
        /> */}
      </div>
    </div>
  );
};

export default Section3;
