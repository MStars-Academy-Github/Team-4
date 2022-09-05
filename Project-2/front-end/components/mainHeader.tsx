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

export default function MainHeader() {
  const router = useRouter();
  const [isOpen, setIsopen] = useState(false);
  const [videos, setVideos] = useState<IVideos[] | undefined>([]);
  const [search, setSearch] = useState<IVideos[] | []>([]);
  const [checker, setChecker] = useState<boolean>(true);

  function searchHandler(e: any) {
    e.preventDefault();
    videos?.forEach((p: IVideos, i: number) => {
      if (p.title.includes(e.target[0].value)) {
        setSearch([]);
        setSearch([...search, p]);
      }
    });
    if (search.length <= 0) {
      console.log("no such video");
    } else {
      console.log("video exists");
    }
    console.log(search);
    setChecker(false);
  }
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/v1/media/videos")
      .then((res) => {
        setVideos(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
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

      <div className="flex  w-full justify-between">
        {/* {isOpen == true ? <Toggle /> : <LeftSide />} */}
        <div className="flex flex-wrap">
          <div className="headerButtons flex justify-around w-full h-[50px] bg-[#fff] border-t-black">
            <button className="hover:bg-slate-100">All</button>
            <button>Gaming</button>
            <button>Music</button>
            <button>Mixes</button>
            <button>Nature</button>
            <button>Cartoon</button>
          </div>
          {checker
            ? videos?.map((e: IVideos, i: number) => {
                return <Player e={e} i={i} />;
              })
            : search?.map((e: IVideos, i: number) => {
                return (
                  <div>
                    <p>searched videos</p>
                    <Player e={e} i={i} />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
