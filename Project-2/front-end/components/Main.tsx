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
import axios from "axios";
import Player from "./Player";
import dynamic from "next/dynamic";

export default function Main({ setChecker }: MainProps) {
  return (
    <div>
      <div>
        <MainHeader />
      </div>
    </div>
  );
}
