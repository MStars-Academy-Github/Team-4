import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RiUserReceivedLine } from "react-icons/ri";
import LeftSide from "./LeftSide";
import Player from "./Player";
import dynamic from "next/dynamic";
import { IVideos } from "../types/types";
import Toggle from "./Toggle";

export default function MainHeader({ getSearchValue }: any) {
  const router = useRouter();
  const [isOpen, setIsopen] = useState(false);
  const [videos, setVideos] = useState<IVideos[] | undefined>([]);

  const buttons = ["Gaming", "Music", "Animation", "Nature", "Mixes"];

  function fliterHandler(e: string) {
    const filters: IVideos[] = [];
    console.log(e);
    videos?.forEach((p: IVideos) => {
      if (p.genre == e) {
        filters.push(p);
      } else {
        console.log("no such video");
      }
    });
    console.log(filters);
  }
  function searchHandler(e: any) {
    e.preventDefault();
    getSearchValue(e.target[0].value);
  }
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <>
      <div className="header flex justify-between items-center bg-[#fff] w-[100%] min-h-[70px]">
        <div className="flex w-[250px] items-center min-h-[70px] ml-8">
          <AiOutlineMenu
            onClick={ToggleSidebar}
            className="w-[25px] mb-3 h-[25px] cursor-pointer"
          />
          <a href="/">
            <img
              src="./pictures/Chitube.png"
              className="w-[150px] ml-5 h-[100px]"
              alt=""
            />
          </a>
        </div>
        <form
          action=""
          className="searchForm flex "
          onSubmit={(e: any) => {
            searchHandler(e);
          }}
        >
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
          <AiOutlineVideoCameraAdd
            onClick={() => {
              router.push("/upload");
            }}
            className="w-[25px] h-[25px] cursor-pointer"
          />
          <MdOutlineNotificationsActive className="w-[25px] h-[25px]" />
          <RiUserReceivedLine
            className="w-[25px] h-[25px] cursor-pointer"
            onClick={() => {
              router.push("/profile");
            }}
          />
        </div>
      </div>
      <div className="flex  w-full ">
        {isOpen == true ? <Toggle /> : <LeftSide />}
        <div className="flex flex-wrap w-full">
          <div className="headerButtons flex justify-around w-full h-[50px] bg-[#fff] border-t-black">
            <button className="hover:bg-slate-100">All</button>
            {buttons.map((e: string) => {
              return (
                <button
                  type="button"
                  value={e}
                  onClick={() => {
                    fliterHandler(e);
                  }}
                >
                  {e}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
