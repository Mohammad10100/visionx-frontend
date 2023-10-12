import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import '../../src/App.css'
import { apiConnector } from '../services/apiconnector';
import { rank } from '../services/apis';


export default function Top5() {

  const [rankData, setRankData] = useState([]);

  //Fetch top 5 rank
  useEffect(() => {
    const fetchRanks = async () => {
      const res = await apiConnector("GET", rank.TOP5RANK_API);
      setRankData(res.data.top5players);
    }
    fetchRanks();
  }, []);



  return (
    <div className='Players text-white bg-black min-h-screen'>
      <div>
        <h1 className=' text-[7vw] text-white opacity-80 py-10'>Top 5 Players</h1>
        <div className="playerCards flex justify-between lg:py-[10vh]">
          {rankData.map((player, index) => {
            { console.log(player.image, index); }
            return (

              <div key={index} className={`card border-solid border-4 bg-zinc-800 min-w-[16vw] max-h-[16vw] justify-center items-center flex flex-col ${index == 0 ? 'border-yellow-300' : (index == 1 ? 'border-teal-400' : (index == 2 ? ' border-yellow-600' : ' border-zinc-800'))}`}  >
                {/* <div className=' flex flex-col items-center '> */}
                <div className=' bg-slate-500 rounded-full w-[10vw] h-[10vw] flex justify-center'>
                  <img className=' max-w-[70%] ' src={player.image} alt="" />
                </div>
                <div className='flex flex-col justify-center text-center text-[1.3vw] font-semibold'>
                  <span className="name">{player.username}</span>
                  <span className="rank">#{player.rank}</span>
                </div>
                {/* </div> */}
              </div>
            )
          })}
        </div>
        <div className=' flex flex-col  my-14'>
          <div className=' pb-[1] h-[0.2vh] bg-gray-200 opacity-30 w-full mb-5 lg:mb-[10vh]'></div>
          <div className='flex justify-between flex-col sm:flex-wrap md:flex-row lg:flex-row '>
            <div className='flex flex-col my-10 lg:my-[8vh] '>
              <span className=' text-lg font-bold'>Doodly</span>
              <span className=' font-semibold'>Made by team.exe</span>
              <span className=' text-xs'>Students of Rizvi College of Engineering</span>
            </div>
            <div className=' lg:my-[8vh] sm:my-10'>
                <span className=' text-lg text-left font-bold'>Team Members</span>
                <ul className=' font-medium flex flex-wrap w-[20vw] justify-between pl-4 list-disc'>
                  <li className=' w-[9vw]'>Yousuf</li>
                  <li className=' w-[9vw]'>Zubair</li>
                  <li className=' w-[9vw]'>Mohammad</li>
                  <li className=' w-[9vw]'>Yashraj</li>
                </ul>
            </div>
            <div className='flex flex-col my-10 lg:my-[8vh] '>
              <span className=' text-lg font-bold'>Links</span>
              <span className=' font-semibold'>Github Repository</span>
              <span className=' font-semibold'>Play Game</span>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
