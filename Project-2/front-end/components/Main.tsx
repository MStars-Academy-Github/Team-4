import React, { useEffect, useState } from "react";
import { MainProps, IVideos } from "../types/types";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineVideoCameraAdd,
  AiFillHome,
} from "react-icons/ai";
import {
  MdOutlineNotificationsActive,
  MdOutlineExplore,
  MdSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import ReactPlayer from "react-player";
import axios from "axios";
import Player from "./Player";

export default function Main({ setChecker }: MainProps) {
  const [videos, setVideos] = useState<IVideos[] | undefined>([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/v1/media/videos")
      .then((res) => {
        setVideos(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [videos]);
  console.log(videos);

  return (
    <div>
      <div className="header flex justify-around  top-0 bg-[#fff] w-[100%] min-h-[70px]">
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
      <br className="w-5 min-h-10 text-black" />
      <div className="headerButtons  border-t-black">
        <button>All</button>
        <button>Gaming</button>
        <button>Music</button>
        <button>Mixes</button>
        <button>Nature</button>
        <button>Cartoon</button>
      </div>
      <div>
        <div className="w-[100px] absolute top-[70px] min-h-[100%] bg-[#fff]">
          <div className="">
            <div className="w-[100px] h-[50px] text-center mt-3 mb-7 cursor-pointer hover:bg-slate-100">
              <AiFillHome className="w-[25px] ml-8 h-[25px]" />
              <p className="ml-[-5px]">Home</p>
            </div>
            <div className="w-[100px] h-[50px] text-center mb-7 cursor-pointer hover:bg-slate-100">
              <MdOutlineExplore className="w-[25px] ml-8 h-[25px]" />
              <p className="ml-[-10px]">Explore</p>
            </div>
            <div className="w-[100px] h-[50px] text-center mb-7 cursor-pointer hover:bg-slate-100">
              <MdSubscriptions className="w-[25px] ml-8 h-[25px]" />
              <p className="w-[100px] h-[50px] text-center mb-7 cursor-pointer hover:bg-slate-100">
                Subscriptions
              </p>
            </div>
            <div className="w-[100px] h-[50px] text-center mb-7 cursor-pointer hover:bg-slate-100">
              <MdOutlineVideoLibrary className="w-[25px] ml-8 h-[25px]" />
              <p className="ml-[-8px]">Library</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {videos?.map((e) => {
          return <Player video={e} />;
        })}
      </div>
    </div>
  );
}
