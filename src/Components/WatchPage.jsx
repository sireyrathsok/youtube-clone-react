import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import VideoTV from "./VideoTV";
import APIFetch from "../api/APIFetch";
import RatingSec from "./RatingSec";
import {
  ArrowDown,
  Bell,
  Clipboard,
  Download,
  Music,
  Share,
  ThumbsDown,
  ThumbsUp,
  User,
} from "lucide-react";
import Comments from "./Comments";

function WatchPage() {
  const { videoID } = useParams();
  const [data, setData] = useState([]);
  const [sub, setSub] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await APIFetch(
          "https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=RDZiQo7nAkQHU&part=snippet&maxResults=50"
        );
        setData(result.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className=" lg:flex x xl:mx-24   h-screen overflow-auto scrollbar-hide mt-7 pb-20 ">
      {console.log("parammmmmmmmmmmmmmm", videoID)}
      {data.map((item) => {
        return item.snippet.resourceId.videoId === videoID ? (
          <div
            className=" px-5 lg:max-w-2xl xl:max-w-3xl    "
            key={item.snippet.id}
          >
            <VideoTV videoID={item.snippet.resourceId.videoId} />
            <div className=" mt-4">
              <p className="text-main-title sm:text-xl max-w-none  ">
                {item.snippet.title}
              </p>
              <div className=" mt-5  ">
                <div className=" flex  gap-6 xxs:justify-between md:justify-normal md:gap-20  lg:gap-4 items-center">
                  <div className=" flex gap-3 items-center">
                    <User
                      width={40}
                      height={40}
                      className=" text-white rounded-full bg-gray-500 "
                    />
                    <div className="  ">
                      <p className="text-main-title">
                        {item.snippet.videoOwnerChannelTitle}
                      </p>
                      <p className="text-sub-title xs:text-xs ">
                        93k <span>subscribers</span>
                      </p>
                    </div>
                  </div>
                  <div className=" flex gap-3 ">
                    <div className="button-style bg-button flex gap-2 lg:ml-9   rounded-lg">
                      {sub ? (
                        <button
                          className=" px-2 "
                          onClick={() => setSub(false)}
                        >
                          Subscribe
                        </button>
                      ) : (
                        <div
                          className=" flex items-center gap-2  "
                          onClick={() => setSub(!false)}
                        >
                          <Bell width={20} />
                          <p>Subscribed</p>
                          <ArrowDown width={20} />
                        </div>
                      )}
                    </div>

                    <div className="  gap-1 hidden button-style   rounded-2xl w-fit">
                      <ThumbsUp className=" text-white fill-white" />
                      <p className=" flex">
                        174K <span className=" mx-2   h-7">|</span>
                      </p>
                      <ThumbsDown />
                    </div>
                    <div className="button-style xs:hidden xxs:hidden lg:hidden sm:flex md:flex  xl:flex gap-2 rounded-2xl">
                      <Share className=" text-white " />
                      <p>Share</p>
                    </div>
                    <div className="button-style  hidden sm:flex md:flex xl:flex lg:flex gap-2 rounded-2xl">
                      <Download className=" text-white " />
                      <p>Download</p>
                    </div>
                    <div className="button-style  hidden xs:hidden md:flex  xl:flex  gap-2 rounded-2xl">
                      <Clipboard className=" text-white " />
                      <p>Cilp</p>
                    </div>
                  </div>
                  {/* Like dislikse share download clip */}
                </div>

                {/* comments section -----------------------*/}
                <div className=" hidden lg:flex  ">
                  <Comments videoID={videoID} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        );
      })}

      <div className=" ">
        {/* //suggested video section */}
        {data.map((item) => {
          return (
            <div className="mt-5 sm:mt-9 lg:mt-0 mb-5  h-fit   mx-6 flex-col">
              {item.snippet.resourceId.videoId !== videoID ? (
                <div className=" flex items-start  ">
                  <Link to={`/watch/${item.snippet.resourceId?.videoId}`}>
                    <img
                      className="  xxs:max-w-[170px] xs:w-44 lg:max-w-xs     border-2 border-gray-800  "
                      src={
                        item.snippet.thumbnails?.maxres?.url ||
                        item.snippet.thumbnails.high.url
                      }
                      alt="thumbnails"
                    />
                  </Link>

                  <div className=" ml-2  ">
                    <div className=" flex items-start  gap-3 max-w-[250px] xxs:max-w-[250px]   sm:max-w-none lg:max-w-[800px]">
                      <p className=" text-suggested-title ">
                        {item.snippet.title}
                      </p>
                    </div>

                    <div className=" ">
                      <div className=" flex gap-1 text-suggested-sub-title ">
                        <p>{item.snippet.videoOwnerChannelTitle}</p>
                        <Music width={12} />
                      </div>

                      <div className=" flex   gap-5 text-suggested-sub-title ">
                        <p>216k views</p>
                        <p>6 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WatchPage;
