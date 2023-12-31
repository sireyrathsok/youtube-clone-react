import {
  ArrowDown01,
  ArrowRight,
  ArrowUp01,
  Clock,
  History,
  Home,
  Menu,
  PlaySquare,
  ThumbsUp,
  UserSquare,
  Video,
} from "lucide-react";
import React from "react";
import Logo from "../Logo";
import { useState, useEffect } from "react";
import APIFetch from "../../api/APIFetch";
import ShowMore from "../ShowMore";

function SideBar({ setActive }) {
  const [seeMore, setSeeMore] = useState(false);
  const [showless, setShowless] = useState(false);

  return (
    <div className="  pt-3 pr-6 h-screen  overflow-y-auto scrollbar-hide  absolute left-0 z-50   top-0 bg-slate-950 border border-slate-900">
      <div className=" z-50  flex items-center justify-center sm:pr-2 pr-7     ">
        <Menu
          onClick={() => setActive(false)}
          className="hover-bg mr-2 sm:mr-6  stroke-primary rounded-full "
        />
        <Logo />
      </div>

      <div className="  mt-5">
        <div className=" ">
          <div className=" sidebar-item">
            <Home />
            <p>Home</p>
          </div>
          <div className=" sidebar-item">
            <Video />
            <p>Shorts</p>
          </div>
          <div className=" sidebar-item">
            <ThumbsUp />
            <p>SubscriptIcons</p>
          </div>

          <p className=" bg-slate-800 h-0.2  mt-4  w-full absolute left-0 right-0"></p>
        </div>

        {/* You Section--------- */}
        <div>
          <p className="sidebar-item mt-7 font-bold  pointer-events-none ">
            You <ArrowRight />
          </p>

          <div className=" sidebar-item">
            <UserSquare />
            <p>Your channel</p>
          </div>
          <div className=" sidebar-item">
            <History />
            <p>History</p>
          </div>
          <div className=" sidebar-item">
            <PlaySquare />
            <p>Your videos</p>
          </div>
          <div className=" sidebar-item">
            <Clock />
            <p>Watch later</p>
          </div>
          {/* <div>
            <div
              className={`sidebar-item ${seeMore && showless ? "hidden" : ""} `}
            >
              <ArrowDown01 />
              <div onClick={() => setSeeMore(!false)}>Show more</div>
            </div>
            <div className={`${seeMore ? "flex" : "hidden"}`}>
              <ShowMore />
            </div>

            <div
              className={` flex-col  ${seeMore ? "flex" : "hidden"} ${
                showless ? "hidde" : "flex"
              }`}
            >
              <button
                className={`sidebar-item `}
                onClick={() => {
                  setShowless(!false);
                  setSeeMore(false);
                }}
              >
                <ArrowUp01 />
                <p>Show Less</p>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
