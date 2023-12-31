import { User } from "lucide-react";
import React from "react";
import { useEffect, useState } from "react";
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
        const result = await response.json();
        setComments(result.items);
        console.log("commentssssss.................", result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchComment();
  }, []);
  return (
    <div className="  gap-10 mt-10">
      <p className=" text-white text-lg">Comments</p>
      <p className=" bg-gray-900 w-full h-0.5 mt-2"></p>
      {comments.map((item) => {
        return (
          <ul key={item.id} className=" mt-6 flex items-start gap-3 ">
            <img
              className=" rounded-full "
              src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
              alt="user-profile"
            />

            <div>
              <li className=" text-white">
                {item.snippet.topLevelComment.snippet.authorDisplayName}
              </li>
              <li className=" text-white  ">
                {item.snippet.topLevelComment.snippet.textDisplay}
              </li>
            </div>
          </ul>
        );
      })}
    </div>
  );
}

export default Comments;
