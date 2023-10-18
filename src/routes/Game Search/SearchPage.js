import React, { useEffect } from 'react';
import SearchSection1 from './Sections/SearchSection1';
import SearchSection2 from './Sections/SearchSection2';
import { useNavigate } from 'react-router';

const SearchPage = ({ socket, setFinding }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Delay the execution by 2 seconds (2000 milliseconds)
    const delay = setTimeout(() => {
      socket.emit('findRoom','Yashraj');
    }, 3000);

    return () => {
      // Clear the timeout when the component unmounts
      clearTimeout(delay);
      socket.off('findRoom');
    };
  }, []);

  useEffect(()=>{
    socket.on('roomFound', (roomID) => {
        setFinding(false);
        navigate(`/game/${roomID}`);
      });
      return ()=>{
        socket.off('roomFound')
      }
  },[socket])

  return (
    <div>
      <SearchSection1 />
      <SearchSection2 />
    </div>
  );
};

export default SearchPage;
