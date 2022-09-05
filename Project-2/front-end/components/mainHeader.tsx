import React from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";

export default function MainHeader() {
  return (
    <div>
      <div className="header flex justify-between items-center bg-[#fff] w-[100%] min-h-[70px]">
        <div className="flex w-[250px] items-center min-h-[70px] ml-8">
          <AiOutlineMenu className="w-[25px] mb-3 h-[25px] cursor-pointer" />
          <a href="/">
            <img
              src="./pictures/Chitube.png"
              className="w-[150px] ml-5 h-[100px]"
              alt=""
            />
          </a>
        </div>
        <form action="" className="searchForm flex ">
          <input
            type="search"
            className=""
            placeholder="Search"
            name="search"
            id=""
          />
          <button type="submit">
            <AiOutlineSearch className="left-[15px] relative" />
          </button>
        </form>
        <div className="flex w-[250px] justify-around">
          <AiOutlineVideoCameraAdd className="w-[25px] h-[25px]" />
          <MdOutlineNotificationsActive className="w-[25px] h-[25px]" />
          <p>UserName</p>
        </div>
      </div>
      <div className="headerButtons flex justify-around w-full h-[30px] bg-[#fff] border-t-black">
        <button className="hover:bg-slate-100">All</button>
        <button>Gaming</button>
        <button>Music</button>
        <button>Mixes</button>
        <button>Nature</button>
        <button>Cartoon</button>
      </div>
    </div>
  );
}
