import { Bell, Menu, Mic, Search, User, Video, Voicemail } from "lucide-react";
import React from "react";
import Logo from "../Components/Logo";
import { useState } from "react";
import SideBar from "../Components/sidebar/SideBar";
import { Link } from "react-router-dom";

const NavBar = ({ data }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="  flex flex-1 justify-between  items-center gap-5 pt-3 px-3 md:px-7  z-0 ">
      <div className=" ">
        <Link to="/">
          <div className={` flex items-center  ${active ? "hidden" : ""}`}>
            {/* <div className="  flex items-center "> */}

            <Menu
              onClick={() => setActive(true)}
              className="hover-bg mr-2 sm:mr-6  stroke-primary  rounded-full "
            />
            <Logo />
          </div>
        </Link>

        {active ? <SideBar setActive={setActive} data={data} /> : ""}
      </div>

      <div
        className={`flex grow items-center justify-end sm:justify-center ${
          active ? " ml-44" : ""
        }`}
      >
        <input
          placeholder="Search "
          className=" hidden sm:flex grow pl-4 max-w-lg border border-slate-400 bg-primaryBgColor rounded-tl-xl rounded-bl-xl h-8"
        />
        <Search
          onClick={() => {
            setActive ? setActive(false) : "";
          }}
          className=" grow-0 hover:cursor-pointer  stroke-primary sm:bg-secondBgColor sm:pointer-events-none sm:h-8 sm:rounded-tr-xl sm:rounded-br-xl   h-9 w-9 px-2 hover:px-2 hover:rounded-full hover:bg-slate-500 "
        />
        <Mic className=" sm:ml-4 stroke-white sm:bg-secondBgColor hover-bg w-9 h-9 px-2 rounded-full" />
      </div>

      <div className=" flex items-center gap-2 sm:gap-3">
        <Video className=" stroke-white hover-bg rounded-full " />
        <Bell className=" stroke-white  rounded-full px-2 hover-bg " />
        <User className=" stroke-white bgg bg-gray-600 h-9 w-9 rounded-full px-2" />
      </div>
    </div>
  );
};

export default NavBar;
