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
        <input type="button" value="ADD MEDIA" className="w-full mr-1" />
        {/* <p className="w-full mr-1">ADD MEDIA</p> */}

        <button
          type="button"
          onClick={() => {
            router.push("/");
            setChecker(true);
            localStorage.clear();
          }}
          className="w-[250px]"
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
}
