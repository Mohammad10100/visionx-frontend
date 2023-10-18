import React, { useEffect, useState } from 'react'
import sec1img from '../../../utils/sec1img.jpg'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Fade from 'react-reveal'
import VideoPlayer from '../../../Component/VideoPlayer';
import videobg from '../../../utils/landingvideo1.mp4'
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { useNavigate } from 'react-router-dom';

const BoldFont = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '600', // bold (600) weight
};

const extraBolt = {
fontFamily: 'Poppins, sans-serif',
fontWeight: '800'
}

const MediumPoppins ={
  fontFamily:'Poppins, sans-serif',
  fontWeight:'600'
}

const transparentInputStyle = {
background: 'transparent',
color: 'white',
outline:'none'
};

const Section1 = ({socket,setFinding}) => {
  const navigate = useNavigate()
  const [roomID,setRoomID] = useState('')

    useEffect(()=>{
      socket.on('roomError',()=>{
        alert('Error with the roomID')
      })

      socket.on('userJoined',(roomId)=>{
        navigate(`/game/${roomId}`)
      })

      return () => {
        socket.off('roomError');
        socket.off('userJoined')
      };
    },[socket])

    const joinRoom = () => {
      if(roomID){
        socket.emit('joinRoom', roomID,'yash');
        socket.off('joinRoom')
      }else{
        alert('Enter Room ID')
      }
    };

    const findRoom = ()=>{
      setFinding(true)
      navigate('/finding')
    }

  return (
    <div className='flex flex-col justify-center  items-center'>
       <div className='mt-24 flex flex-col justify-center gap-[8vw] items-center'>
        <div className='text-center flex flex-col items-center justify-center gap-[3rem]'>
        <Fade bottom>
            <h1 className='text-white text-[4.4rem] m-0' style={{...BoldFont,lineHeight:'1'}}>Bring your doodle to life!</h1>
        </Fade>
        <Fade bottom>
            <span className='flex gap-[2rem]'>
            <div className='flex bg-[#2F2F2F] p-3 min-w-[30rem] rounded-lg min-h-[5rem]' style={{...BoldFont}}>
          <input
            type='text'
            placeholder='ENTER ROOM CODE'
            style={transparentInputStyle}
            className='w-[70%]'
            onChange={(e)=>{setRoomID(e.target.value)}}
          />
          <button className='w-[30%] text-white bg-[#6C27FF] rounded-lg hover:scale-110 duration-500' onClick={joinRoom}>
            JOIN GAME
          </button>
        </div>
        <button className='min-h-[5rem] flex justify-center items-center text-[1.2rem] gap-[0.5rem] duration-500 hover:scale-110 bg-[#6C27FF] text-white min-w-[8rem] rounded-lg' style={{...extraBolt}} onClick={findRoom}>PLAY <ShuffleIcon/></button>
            </span>
        </Fade>
        <Fade bottom>
            <p className='text-white font-semibold text-[0.8rem] bg-[#1D1D1D] py-[0.7rem] px-[1rem] rounded-full'>Be Creative Be Doodly</p>
        </Fade>
        </div>
        {/* <div className='sec1gradient '>
          <img src={sec1img} alt="" className='rounded-t-[3.5vw] w-[68.958vw] h-[27.135vw]' />
        </div> */}
        
    </div>
        <div className='sec1gradient flex justify-center mt-[5rem]'>
        <VideoPlayer video={videobg} innerShadow={true}/>
          <img src={sec1img} alt="" className=' rounded-t-[3.5vw] w-[68.958vw] h-[27.135vw]' />
        </div>
    </div>
  )
}

export default Section1