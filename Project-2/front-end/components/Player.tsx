import axios from "axios";
import React from "react";
import ReactPlayer from "react-player";
import { IVideos, PlayerProps } from "../types/types";
export default function Player({ e, i }: PlayerProps) {
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
    <div className="w-[450px] h-[250px]">
      <p>testing</p>
      <ReactPlayer controls key={i} />
    </div>
  );
}
