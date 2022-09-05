import axios from "axios";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { list } from "../pages/api/api.media";
import { IVideos, PlayerProps } from "../types/types";
export default function Player({ e, i }: PlayerProps) {
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

  return (
    <div className="w-[450px] h-[250px]">
      <p>testing</p>
      <ReactPlayer
        controls
        key={i}
        url={`http://localhost:4000/v1/media/video/${e._id}`}
      />
    </div>
  );
}
