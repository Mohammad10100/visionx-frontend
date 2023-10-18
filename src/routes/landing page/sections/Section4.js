import React from 'react'

const Section4 = () => {

    const MediumPoppins ={
        fontFamily:'Poppins, sans-serif',
        fontWeight:'600'
    }
    const RegularPoppins={
        fontFamily:'Poppins, sans-serif',
        fontWeight:'400'
    }

  return (
    <div className='mt-[5rem] flex flex-col justify-center items-center'>
        <hr
        style={{
            width:'90%',
          background: '#D5D5D5',
          color: '#D5D5D5',
          borderColor: '#D5D5D5',
          height: '3px',
        }}
      />
      <div className='w-[90%] flex gap-[2rem] py-[10rem]'>
        <div className='w-[30%]'>
            <h1 className='text-white' style={{...MediumPoppins}}>
            Computer Vision and Augmented Reality
            </h1>
        </div>
        <div className='w-[70%]'>
            <p className='text-white ' style={{...RegularPoppins}}>
            Imagine a world where your hand-drawn doodles seamlessly come to life, transcending the boundaries of paper and ink to manifest in the dynamic realm of Augmented Reality. Our project embarks on a mission to transform this imaginative vision into a tangible reality, harnessing the power of advanced technologies to bridge the gap between physical artistry and digital interactivity. 
            </p>
        </div>
      </div>
      <hr
        style={{
            width:'90%',
          background: 'white',
          color: 'white',
          borderColor: 'white',
          height: '3px',
        }}
      />
    </div>
  )
}

export default Section4