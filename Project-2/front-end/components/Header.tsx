import { useRouter } from "next/router";
import React from "react";
import { HeaderProps } from "../types/types";

export default function Header({ setChecker }: HeaderProps) {
  const router = useRouter();
  return (
    <div className=" bg-white text-black w-full h-[100px] flex align-middle justify-around ">
      <img
        src="./pictures/Chitube.png"
        className=" cursor-pointer w-[150px] h-[100px] mt-2"
        alt=""
        onClick={() => {
          router.push("/");
        }}
      />
      <div className="w-[250px] justify-between h-[100px] flex  items-center">
        <input
          type="button"
          value="ADD MEDIA"
          onClick={() => {
            router.push("/upload");
          }}
          className="w-[100px] mr-1 cursor-pointer"
        />
        <button
          className=" text-red-500 w-[100px]"
          type="button"
          onClick={() => {
            router.push("/");
            setChecker(true);
            localStorage.clear();
          }}
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
}
