import { Play, Tv, Tv2Icon } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <div className=" flex gap-1 items-center">
      <Tv2Icon className=" bg-red-500 px-1 py-1 w-10 h-7 stroke-slate-50 rounded-md  " />
      <p className=" text-2xl font-bold text-primary  ">UTube</p>
    </div>
  );
};

export default Logo;
