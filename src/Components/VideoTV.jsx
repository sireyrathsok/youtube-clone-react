import React from "react";
import ReactPlayer from "react-player";

const VideoTV = ({ videoID }) => {
  return (
    <div>
      <div className=" border-2 border-gray-900  lg:hidden  md:hidden xl:hidden sm:hidden flex   flex-1 justify-center bor   rounded-xl shadow-sm ">
        <ReactPlayer
          playing={true}
          controls={true}
          loop={true}
          light={true}
          width={500}
          height={260}
          url={`https://www.youtube.com/watch?v=${videoID}`}
        />
      </div>

      <div className=" border-2 border-gray-900  lg:hidden md:hidden xl:hidden sm:flex hidden   flex-1 justify-center bor   rounded-xl shadow-sm ">
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
      <div className=" border-2 border-gray-900  hidden md:flex  lg:hidden xl:hidden flex-1 justify-center bor   rounded-xl shadow-sm ">
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
      <div className=" border-2 border-gray-900  hidden lg:flex xl:hidden  w-fit  bor   rounded-xl shadow-sm ">
        <ReactPlayer
          playing={true}
          controls={true}
          loop={true}
          light={true}
          width={600}
          height={350}
          url={`https://www.youtube.com/watch?v=${videoID}`}
        />
      </div>

      <div className=" border-2 border-gray-900  hidden xl:flex  justify-center bor   rounded-xl shadow-sm ">
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
