import React from "react";
import ReactPlayer from "react-player";
import { IVideos } from "../types/types";
export default function Player({ video }: any) {
  console.log(video);

  return (
    <div>
      <ReactPlayer url="https://www.youtube.com/watch?v=7sDY4m8KNLc" controls />
    </div>
  );
}
