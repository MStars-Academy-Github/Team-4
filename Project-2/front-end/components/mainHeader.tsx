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
      {" "}
      <div className="header flex justify-around absolute top-0 bg-[#fff] w-[100%] min-h-[70px]">
        <div className="flex absolute top-[-6px] left-[33px]">
          <AiOutlineMenu className="w-[25px] absolute top-[30px]  h-[25px] cursor-pointer" />
          <a href="/">
            <img
              src="./pictures/Chitube.png"
              className="w-[150px] ml-10 h-[100px]"
              alt=""
            />
          </a>
        </div>
        <form
          action=""
          className="searchForm flex relative top-[18px] left-[0px]"
        >
          <input
            type="search"
            className=""
            placeholder="Search"
            name="search"
            id=""
          />
          <button type="submit">
            <AiOutlineSearch className="left-[8px] relative" />
          </button>
        </form>
        <div className="flex w-[250px] justify-around absolute top-[20px] right-[150px]">
          <AiOutlineVideoCameraAdd className="w-[25px] h-[25px]" />
          <MdOutlineNotificationsActive className="w-[25px] h-[25px]" />
          <p>UserName</p>
        </div>
      </div>
      <div className="headerButtons absolute border-t-black">
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
