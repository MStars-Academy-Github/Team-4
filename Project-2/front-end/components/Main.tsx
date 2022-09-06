import React, { useCallback, useEffect, useState } from "react";
import { MainProps, IVideos } from "../types/types";
import MainHeader from "./mainHeader";
import axios from "axios";
import Player from "./Player";

export default function Main({ setChecker }: MainProps) {
  const [videos, setVideos] = useState<IVideos[] | undefined>([]);
  const [search, setSearch] = useState<IVideos[] | any[]>([]);
  const [checking, setChecking] = useState<boolean>(true);
  const [values, setValues] = useState<string>("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/v1/media/videos")
      .then((res) => {
        setVideos(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  function getSearchValue(e: string) {
    setSearch([]);
    videos?.forEach((p: IVideos, i: number) => {
      if (p.title.includes(e)) {
        if (search && search.includes(p)) {
          console.log("video exists");
        } else {
          setSearch([...search, p]);
        }
      }
    });
    if (search.length <= 0) {
      console.log("no video within this search");
      setValues("haisan bichleg bhgu");
      setChecker(true);
    }
    setChecker(false);
  }
  function filterHandler(e: string) {
    const filters: IVideos[] = [];
    console.log(e);

    videos?.forEach((p: IVideos) => {
      if (p.genre == e) {
        filters.push(p);
        console.log(filters);
      }
    });
    setVideos(filters);
  }

  return (
    <div>
      <div>
        <MainHeader
          getSearchValue={getSearchValue}
          filterHandler={filterHandler}
        />
      </div>
      <div className="flex  w-full h-[700px] bg-[#f9f9f9] flex-wrap justify-around">
        {(checking ? videos : search)?.map((e: IVideos, i: number) => {
          return (
            <div>
              <p>{values}</p>
              <Player e={e} i={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
