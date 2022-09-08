import axios from "axios";
import dynamic from "next/dynamic";
import React, { useEffect, useState, useCallback } from "react";
import ReactPlayer from "react-player";
import { list } from "../pages/api/api.media";
import { IVideos, PlayerProps } from "../types/types";
export default function Player({ e, i }: PlayerProps) {
  const [play, setPlay] = useState<number>(0);
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  // console.log(e);
  function stopHandler() {
    setPlay(1);
  }
  function playHandler() {
    console.log(play);

    if (play == 1) {
      console.log("already counted");
    } else if (play == 0) {
      console.log("counting");
      axios
        .put("http://localhost:4000/v1/media/views", { _id: e._id })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
  return (
    <>
      <ReactPlayer
        className="player"
        controls
        key={i}
        url={`http://localhost:4000/v1/media/video/${e._id}`}
        onPlay={() => playHandler()}
        onPause={() => {
          stopHandler();
        }}
      />
      {/* <PlayerControls/> */}
      <div className="flex flex-col">
        <h2 className=" font-bold text-xl ml-3">{e.title}</h2>
        {/* <p className="ml-3 font-thin">{e.postedBy.firstname}</p> */}
        <p className="ml-3 font-thin">
          {e.views} views &#183; {e.created.toString().slice(0, 10)}
        </p>
      </div>
    </>
  );
}
