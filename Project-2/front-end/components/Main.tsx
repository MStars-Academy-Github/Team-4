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

export default function Main({ setChecker, videos }: MainProps) {
  console.log(videos);

  return (
    <div className="flex">
      <div>
        <MainHeader />
        <LeftSide />
      </div>
      <div className="">
        {videos?.map((e: IVideos, i: number) => {
          return <Player e={e} i={i} />;
        })}
      </div>
    </div>
  );
}
