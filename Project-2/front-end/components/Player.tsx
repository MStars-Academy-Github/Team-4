import axios from "axios";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { list } from "../pages/api/api.media";
import { IVideos, PlayerProps } from "../types/types";
export default function Player({ e, i }: PlayerProps) {
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  console.log(e);

  return (
    <div>
      <ReactPlayer
        className="player"
        controls
        key={i}
        url={`http://localhost:4000/v1/media/video/${e._id}`}
      />
      <div className="flex flex-col">
        <h2 className=" font-bold text-xl ml-3">{e.description}</h2>
        <p className="ml-3 font-thin">{e.postedBy.firstname}</p>
        <p className="ml-3 font-thin">
          {e.views} views &#183; {e.created.toString().slice(0, 10)}
        </p>
      </div>
    </div>
  );
}
