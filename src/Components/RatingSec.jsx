import React from "react";
import { Clipboard, Download, Share, ThumbsDown, ThumbsUp } from "lucide-react";

const RatingSec = () => {
  return (
    <div className="  mt-6 flex gap-1 items-center justify-center ">
      <div className=" flex gap-1 button-style  rounded-2xl w-fit">
        <ThumbsUp className=" text-white fill-white" />
        <p className=" ">
          174K <span className=" mx-1  h-7">|</span>
        </p>
        <ThumbsDown />
      </div>

      <div className="button-style flex gap-2 rounded-2xl">
        <Share className=" text-white " />
        <p>Share</p>
      </div>

      <div className="button-style flex gap-2 rounded-2xl">
        <Download className=" text-white " />
        <p>Download</p>
      </div>
      <div className="button-style hidden xs:flex gap-2 rounded-2xl">
        <Clipboard className=" text-white " />
        <p>Cilp</p>
      </div>
    </div>
  );
};

export default RatingSec;
