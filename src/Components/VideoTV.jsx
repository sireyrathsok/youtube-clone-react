import React from "react";
import ReactPlayer from "react-player";

const VideoTV = () => {
  return (
    <div className=" bg-red-200 w-40 ">
      <h1>Video Player</h1>
      <ReactPlayer
        playing={true}
        controls={true}
        loop={true}
        light={true}
        url="https://www.youtube.com/watch?v=FHTbsZEJspU&t=3552s"
      />
      ;
    </div>
  );
};

export default VideoTV;
