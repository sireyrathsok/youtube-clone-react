import React from "react";
import APIFetch from "../api/APIFetch";
import { useState, useEffect } from "react";
import { List } from "lucide-react";

const ShowMore = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await APIFetch(
          "https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=RDZiQo7nAkQHU&part=snippet&maxResults=50"
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
    <div>
      {data.map((item) => (
        <div key={item.id} className="  sidebar-item">
          <List />
          <p>{item.snippet.videoOwnerChannelTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowMore;
