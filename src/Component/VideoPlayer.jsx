import React from 'react';


const VideoPlayer = ({video,innerShadow}) => {
  return (
    <div className={`video-container absolute z-[-9999] ${innerShadow ? ('innerShadow'):('')}`}>
      <video
        className="video"
        src={video}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default VideoPlayer;
