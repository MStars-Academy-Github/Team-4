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
import Toggle from "./Toggle";

export default function MainHeader({
  getSearchValue,
  filterHandler,
  setChecking,
  videos,
}: any) {
  const router = useRouter();

  const buttons = ["Animation", "Music", "Gaming", "Entertainment", "Comedy"];

  function fliterHandler(e: string) {
    filterHandler(e);
  }
  function searchHandler(e: any) {
    e.preventDefault();
    getSearchValue(e.target[0].value);
  }

  return (
    <>
      <div className="header flex justify-between items-center bg-[#fff] w-[100%] min-h-[70px]">
        <a href="/" className="w-[150px] ml-[70px] h-[100px]">
          <img
            src="./pictures/Chitube.png"
            className="w-[150px] h-[100px]"
            alt=""
          />
        </a>

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
      <div className="headerButtons relative flex justify-around w-100 h-[50px] bg-[#fff] border-t-black">
        <button
          className="hover:bg-slate-100"
          onClick={() => {
            setChecking(0);
          }}
        >
          All
        </button>
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
    </>
  );
}
