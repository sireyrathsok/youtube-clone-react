import React from "react";
import APIFetch from "../../api/APIFetch";
import { useEffect, useState } from "react";

function VedioFilter() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await APIFetch(
          "https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=RDZiQo7nAkQHU&part=snippet&maxResults=20"
        );
        console.log(result);
        setData(result.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" flex gap-4 mx-5 mt-7 w-screen whitespace-nowrap scroll-auto  ">
      {data.map((item) => (
        <div key={item.id} className="filter-item  ">
          <p>{item.snippet.videoOwnerChannelTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default VedioFilter;
