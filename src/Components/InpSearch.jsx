import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";

function InpSearch() {
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

  const searchHandling = (event) => {
    return data.filter((item) => {
      const searchResult = item.snippet.title == event.target.value;
      return (
        <div key={item.id}>
          {console.log("searchinggggggggggg............", event.target.value)}
          {console.log("searchResult-----------", searchResult)}
          <p>{searchResult}</p>
        </div>
      );
    });
  };

  return (
    <div className=" flex ">
      <input
        onChange={searchHandling}
        placeholder="Search "
        className=" text-white hidden sm:flex xl:w-88 md:w-72 lg:w-88   pl-4 max-w-lg border border-slate-400 bg-primaryBgColor rounded-tl-xl rounded-bl-xl h-8"
      />
      <Search
        onClick={() => {
          setActive ? setActive(false) : "";
        }}
        className=" grow-0 hover:cursor-pointer  stroke-primary sm:bg-secondBgColor sm:pointer-events-none sm:h-8 sm:rounded-tr-xl sm:rounded-br-xl   h-9 w-9 px-2 hover:px-2 hover:rounded-full hover:bg-slate-500 "
      />
    </div>
  );
}

export default InpSearch;
