import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Exit from '../../../utils/exit.png'

const SearchSection1 = ({socket}) => {

  const navigate = useNavigate()
  
  return (
    <div className='flex justify-between px-[2rem] py-[0.5rem]'>
      <span>
        <button className='bg-[#FF6E6E] rounded-full px-[1rem] py-[0.3rem]'>
          <img src={Exit} onClick={()=>{navigate('/')}}/>
        </button>
      </span>
      <span>
        <span>Yashraj</span>
      </span>
    </div>
  )
}

export default SearchSection1