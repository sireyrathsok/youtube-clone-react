import React from "react";
import ReactPlayer from "react-player";

const VideoTV = ({ videoID }) => {
  return (
    <div className=" flex flex-1 justify-center   rounded-xl shadow-sm ">
      <ReactPlayer
        playing={true}
        controls={true}
        loop={true}
        light={true}
        width={460}
        height={260}
        url={`https://www.youtube.com/watch?v=${videoID}`}
      />
    </div>
  );
};

export default VideoTV;
