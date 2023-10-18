import React from 'react'
import img from '../../../utils/searhingimg.png'
import { Waveform } from '@uiball/loaders'


const BoldFont = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '600', // bold (600) weight
};


const SearchSection2 = () => {
  return (
    <div className='h-[90vh] flex justify-center items-center'>
        <div className='rounded-full bg-[#212121] h-[70vh] w-[70vh] flex justify-center items-center'>
            <div className='rounded-full bg-[#1C1C1C] flex justify-center items-center h-[40vh] w-[40vh]'>
                <div className='flex gap-[0.5rem] flex-col justify-center items-center text-white'>
                <img src={img} />
                <Waveform 
                  size={40}
                  lineWeight={3.5}
                  speed={1} 
                  color="white" 
                />
                <h1 style={{...BoldFont}}>Searching Game</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchSection2