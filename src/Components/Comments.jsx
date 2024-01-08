import { User } from "lucide-react";
import React, { useEffect, useState } from "react";

function Comments({ videoID }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComment = async () => {
      const url = `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${videoID}&maxResults=100`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "8c08c78534msh1fec4dac886d4aep195d20jsnd6a2d307fc4f",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        if (!result || !result.items) {
          throw new Error("Invalid data received from the API");
        }

        setComments(result.items);
        console.log("commentssssss.................", result);
      } catch (error) {
        console.error("Error fetching or processing comments:", error);
        // You can set an error state or handle it as needed
      }
    };

    fetchComment();
  }, [videoID]);

  return (
    <div className="  gap-10 mt-10 mb-24">
      <p className=" text-white text-lg">Comments</p>
      <p className=" bg-gray-900 w-full h-0.5 mt-2"></p>

      {comments.map((item) => (
        <ul key={item.id} className=" mt-6 flex items-start gap-3 ">
          <img
            className=" rounded-full "
            src={
              item.snippet?.topLevelComment?.snippet?.authorProfileImageUrl ||
              null
            }
            alt="user-profile"
          />

          <div>
            <li className=" text-white">
              {item.snippet?.topLevelComment?.snippet?.authorDisplayName ||
                null}
            </li>
            <li className=" text-white  ">
              {item.snippet?.topLevelComment?.snippet?.textDisplay || null}
            </li>
          </div>
        </ul>
      ))}
    </div>
  );
}

export default Comments;
