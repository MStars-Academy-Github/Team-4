import React, { useCallback, useEffect, useState } from "react";
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
import MainHeader from "./mainHeader";
import LeftSide from "./LeftSide";
import axios from "axios";
import Player from "./Player";
import dynamic from "next/dynamic";

export default function Main({ setChecker }: MainProps) {
  const [videos, setVideos] = useState<IVideos[] | undefined>([]);
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
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
  console.log(videos);

  return (
    <div>
      <div>
        <MainHeader />
        <LeftSide />
      </div>
      <div className="flex absolute w-full h-[700px] top-[150px] left-[100px] bg-[#f9f9f9] flex-wrap justify-around">
        {videos?.map((e: IVideos, i: number) => {
          return <Player e={e} i={i} />;
        })}
      </div>
    </div>
  );
}
