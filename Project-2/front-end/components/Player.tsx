import axios from "axios";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { list } from "../pages/api/api.media";
import { IVideos, PlayerProps } from "../types/types";
import dynamic from "next/dynamic";

export default function Player({ e, i }: PlayerProps) {
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

  return (
    <div className="w-[20%] bg-slate-100 h-[250px]">
      <p>testing</p>
      <ReactPlayer

      />
    </div>
  );
}
