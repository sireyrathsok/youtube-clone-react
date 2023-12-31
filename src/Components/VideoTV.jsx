import React from "react";
import ReactPlayer from "react-player";

const VideoTV = ({ videoID }) => {
  return (
    <div>
      <div className=" lg:hidden md:hidden xl:hidden sm:hidden   flex-1 justify-center border-red-400   rounded-xl shadow-sm ">
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
      <div className=" lg:hidden md:hidden xl:hidden sm:flex hidden   flex-1 justify-center border-red-400   rounded-xl shadow-sm ">
        <ReactPlayer
          playing={true}
          controls={true}
          loop={true}
          light={true}
          width={670}
          height={260}
          url={`https://www.youtube.com/watch?v=${videoID}`}
        />
      </div>
      <div className=" hidden md:flex  lg:hidden xl:hidden flex-1 justify-center border-red-400   rounded-xl shadow-sm ">
        <ReactPlayer
          playing={true}
          controls={true}
          loop={true}
          light={true}
          width={900}
          height={400}
          url={`https://www.youtube.com/watch?v=${videoID}`}
        />
      </div>
      <div className=" hidden lg:flex xl:hidden  justify-center border-red-400   rounded-xl shadow-sm ">
        <ReactPlayer
          playing={true}
          controls={true}
          loop={true}
          light={true}
          width={500}
          height={350}
          url={`https://www.youtube.com/watch?v=${videoID}`}
        />
      </div>

      <div className=" hidden xl:flex  justify-center border-red-400   rounded-xl shadow-sm ">
        <ReactPlayer
          playing={true}
          controls={true}
          loop={true}
          light={true}
          width={800}
          height={500}
          url={`https://www.youtube.com/watch?v=${videoID}`}
        />
      </div>
    </div>
  );
};

export default VideoTV;
