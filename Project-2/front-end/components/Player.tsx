import axios from "axios";
import React from "react";
import ReactPlayer from "react-player";
import { IVideos, PlayerProps } from "../types/types";
import dynamic from "next/dynamic";

export default function Player({ e, i }: PlayerProps) {
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  console.log(e);
  axios
    .get(`http://localhost:4000/v1/media/video/${e._id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
  return (
    <div className="w-[20%] bg-slate-100 h-[250px]">
      <p>testing</p>
      <ReactPlayer
        // url={`${process.env.NEXT_PUBLIC_SERVER_URL}/v1/media/video/${item._id}`}
        controls
        key={i}
      />
    </div>
  );
}
