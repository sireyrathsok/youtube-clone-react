import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import VideoTV from "./VideoTV";
import APIFetch from "../api/APIFetch";
import {
  AlarmCheck,
  ArrowDown,
  Bell,
  BellDot,
  Music,
  ThumbsUp,
  User,
  UserCheck,
} from "lucide-react";

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
    <div className="  h-screen overflow-auto scrollbar-hide ">
      {data.map((item) => {
        return item.snippet.resourceId.videoId === videoID ? (
          <div className=" px-5 " key={item.snippet.id}>
            <VideoTV videoID={item.snippet.resourceId.videoId} />
            <div className=" mt-4">
              <p className="text-main-title max-w-none">{item.snippet.title}</p>
              <div className=" mt-4 ">
                <div className=" flex gap-16 items-center">
                  <div className=" flex gap-3 items-center">
                    <User
                      width={40}
                      height={40}
                      className=" text-white rounded-full bg-gray-500 "
                    />
                    <div>
                      <p className="text-main-title">
                        {item.snippet.videoOwnerChannelTitle}
                      </p>
                      <p className="text-sub-title">
                        93k <span>subscribers</span>
                      </p>
                    </div>
                  </div>
                  <div className="button-style bg-button flex gap-2  rounded-lg">
                    {sub ? (
                      <button className=" px-2 " onClick={() => setSub(false)}>
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
                </div>
              </div>
            </div>
            {/* //suggested video section */}
            <div>
              <img
                className=" w-full md:h-44  border border-gray-800  shadow-lg justify-center  mx-1 mb-1   "
                src={
                  item.snippet.thumbnails?.maxres?.url ||
                  item.snippet.thumbnails.high.url
                }
                alt="thumbnails"
              />
            </div>
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
}

export default WatchPage;
