import React, { useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";

export default function LeftSide() {
  return (
    <div className="w-[100px] z-20 fixed top-[70px] flex flex-col min-h-[100%] bg-[#fff]">
      <div className="">
        <div className="w-[100px] h-[50px] mt-3 mb-7 text-center cursor-pointer hover:bg-slate-100">
          <AiFillHome className="w-[25px] ml-8 h-[25px]" />
          <p className="ml-[-5px] font-light">Home</p>
        </div>
        <div className="w-[100px] h-[50px] text-center mb-7 cursor-pointer hover:bg-slate-100">
          <MdOutlineExplore className="w-[25px] ml-8 h-[25px]" />
          <p className="ml-[-10px] font-light">Explore</p>
        </div>
        <div className="w-[100px] h-[50px] text-center mb-7 cursor-pointer hover:bg-slate-100">
          <MdSubscriptions className="w-[25px] ml-8 h-[25px]" />
          <p className="w-[100px] font-light h-[50px] text-center mb-7 cursor-pointer hover:bg-slate-100">
            Subscriptions
          </p>
        </div>
        <div className="w-[100px] h-[50px] text-center mb-7 cursor-pointer hover:bg-slate-100">
          <MdOutlineVideoLibrary className="w-[25px] ml-8 h-[25px]" />
          <p className="ml-[-8px] font-light">Library</p>
        </div>
      </div>
    </div>
  );
}
