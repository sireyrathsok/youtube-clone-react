import APIFetch from "../../api/APIFetch";
import { useState, useEffect } from "react";
import { Music, User } from "lucide-react";
import WatchPage from "../WatchPage";
import { Link, Navigate } from "react-router-dom";
import VideoTV from "../VideoTV";

function Homepage() {
  const [data, setData] = useState([]);
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
    <div className=" sm:flex sm:flex-wrap mt-10 pb-20 pr-2  justify-center   h-screen w-screen overflow-y-auto overflow-x-hidden scrollbar-hide gap-y-20">
      {console.log("data", data)}

      {data.map((item) => {
        return (
          <>
            <div
              key={item.snippet.id}
              className=" justify-end cursor-pointer sm:w-64 md:w-80 xl:w-72 sm:mx-3 md:mx-3   mx-5"
            >
              <Link
                to={`/watch/${item.snippet.resourceId?.videoId}`}
                state={{ videoData: data }}
              >
                <img
                  className=" w-full md:h-44  border border-gray-800  shadow-lg justify-center  mx-1 mb-1   "
                  src={
                    item.snippet.thumbnails?.maxres?.url ||
                    item.snippet.thumbnails.high.url
                  }
                  alt="thumbnails"
                />
              </Link>

              <div className=" pl-3 mb-9 mt-2">
                <div className=" flex items-start gap-3">
                  <p className=" text-main-title max-w-none">
                    {item.snippet.title}
                  </p>
                </div>

                <div>
                  <div className=" flex gap-1 text-sub-title">
                    <p>{item.snippet.videoOwnerChannelTitle}</p>
                    <Music width={12} />
                  </div>

                  <div className=" flex   gap-5 text-sub-title">
                    <p>216k views</p>
                    <p>6 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Homepage;
