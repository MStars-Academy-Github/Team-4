import React from "react";
import { AiFillHome } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineSlowMotionVideo,
  MdHistory,
} from "react-icons/md";

export default function Toggle() {
  return (
    <div className="w-[250px] relative top-[-70px] flex flex-col h-full bg-[#fff]">
      <div className="w-[200px] h-[50px] flex justify-between items-center text-center mt-3 mb-7 cursor-pointer hover:bg-slate-100">
        <AiFillHome className="w-[25px] ml-8 h-[25px]" />
        <p className="mr-4 font-light">Home</p>
      </div>
      <div className="w-[200px] h-[50px] flex justify-between items-center text-center mb-7 cursor-pointer hover:bg-slate-100">
        <MdOutlineExplore className="w-[25px] ml-8 h-[25px]" />
        <p className=" mr-4 font-light">Explore</p>
      </div>
      <div className="w-[200px] h-[50px] flex justify-between items-center text-center mb-7 cursor-pointer hover:bg-slate-100">
        <MdSubscriptions className="w-[25px] ml-8 h-[25px]" />
        <p className="mr-4 font-light">Subscriptions</p>
      </div>
      <div className="w-[200px] h-[50px] justify-between flex items-center text-center mb-7 cursor-pointer hover:bg-slate-100">
        <MdOutlineVideoLibrary className="w-[25px] ml-8 h-[25px]" />
        <p className="mr-4 font-light">Library</p>
      </div>
      <hr className="w-[200px]" />
      <div className="w-[200px] h-[50px] justify-between flex items-center text-center mb-7 cursor-pointer hover:bg-slate-100">
        <MdOutlineSlowMotionVideo className="w-[25px] ml-8 h-[25px]" />
        <p className="mr-4 font-light">Your videos</p>
      </div>
      <div className="w-[200px] h-[50px] justify-between flex items-center text-center mb-7 cursor-pointer hover:bg-slate-100">
        <MdHistory className="w-[25px] ml-8 h-[25px]" />
        <p className=" mr-4 font-light">History</p>
      </div>
    </div>
  );
}
