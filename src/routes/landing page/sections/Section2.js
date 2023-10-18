import React from 'react'


import { Fade } from 'react-reveal'

const fields=[{
    image:'sd',
    para:"Create a new game with few easy steps"
},{
    image:'sdsd',
    para:'Share the code with your friends up to 10'
},{
    image:'dfdf',
    para:'Make doodles and play with your friends'
}]

const Section2 = () => {

    const MediumPoppins ={
        fontFamily:'Poppins, sans-serif',
        fontWeight:'600'
    }
    const RegularPoppins={
        fontFamily:'Poppins, sans-serif',
        fontWeight:'400'
    }

  return (
   <div className=' flex justify-center items-center relative lg:bottom-[3rem] md:bottom-[1.5rem]'>
        <div className='grid lg:grid-rows-1 grid-rows-3 grid-flow-col gap-4 transperant-black w-[80%] lg:p-[5rem] md:p-[3rem] sm:p-[2rem] w-[85%]'>
            {fields.map((field)=>{
                return(
                <Fade bottom>
                    <div className='lg:m-[1rem] m-[2rem]  md:m-[0.8rem] flex flex-col gap-[1rem]'>
                        <div>
                            <img src=''/>
                        </div>
                        <p className='text-white text-center font-normal md:text-[14px] lg:text-[0.9rem] text-[#CBCBCB] medium-pup' style={{...MediumPoppins}}>{field.para}</p>
                    </div>
                </Fade>
                )
            })}
        </div>
   </div>
  )
}

export default Section2