import { useRouter } from "next/router";
import React from "react";
import { HeaderProps } from "../types/types";

export default function Header({ setChecker }: HeaderProps) {
  const router = useRouter();
  return (
    <div className=" bg-white h-16 text-black flex align-middle justify-around ">
      <h1
        onClick={() => {
          router.push("/");
        }}
      >
        MediaStream
      </h1>
      <div className="w-72 flex text-[15px] items-center">
        <p className="w-full mr-1">ADD MEDIA</p>
        <p
          className="w-full mr-1"
          onClick={() => {
            router.push("/profile");
          }}
        >
          MY PROFILE
        </p>
        <button
          type="button"
          onClick={() => {
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
