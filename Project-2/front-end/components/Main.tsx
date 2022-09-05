import React from "react";
import { MainProps } from "../types/types";
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

export default function Main({ setChecker }: MainProps) {
  return (
    <div>
      <MainHeader />
      <LeftSide />
    </div>
  );
}
